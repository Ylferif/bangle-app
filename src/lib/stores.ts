import { readable } from "svelte/store";
import { connect } from "./ble";
import {
  beginRequestHeartRate,
  requestAlarms,
  requestSteps,
  requestTemperature,
} from "./requests";

let connection;
const listeners = new Map();

function onMessage(
  handleConnect: (_connection) => void,
  handleMessage: (message) => void
) {
  listeners.set(handleConnect, { handleConnect, handleMessage });

  return () => {
    listeners.delete(handleConnect);
  };
}

function onMessageType(
  type: string,
  handleConnect: (_connection) => void,
  handleMessage: (message) => void
) {
  return onMessage(handleConnect, (message) => {
    if (message.t === type) {
      handleMessage(message);
    }
  });
}

export async function tryConnect(
  additionalConnectHandlers = []
): Promise<void> {
  if (!connection || connection.isOpen) {
    connection = await connect((message) => {
      let command;
      try {
        command = JSON.parse(message);
      } catch (e) {
        console.warn("Could not parse message", message);
        return;
      }

      console.log("[command]", command);

      for (const { handleMessage } of listeners.values()) {
        handleMessage(command);
      }
    });
  }

  for (const { handleConnect } of listeners.values()) {
    handleConnect(connection);
  }

  for (const handler of additionalConnectHandlers) {
    handler(connection);
  }
}

export const alarms = readable([], (set) => {
  return onMessageType("alarms", requestAlarms, (command) =>
    set(command.alarms)
  );
});

export const temperature = readable(0, (set) => {
  return onMessageType("temperature", requestTemperature, (command) =>
    set(command.temperature)
  );
});

export const steps = readable(0, (set) => {
  return onMessageType("steps", requestSteps, (command) => set(command.steps));
});

export const battery = readable(0, (set) => {
  return onMessageType(
    "status",
    () => {},
    (command) => set(command.bat)
  );
});

export const hrm = readable({ bpm: 0, confidence: 0 }, (set) => {
  return onMessageType(
    "hrm",
    (_connection) => beginRequestHeartRate(_connection, 60000),
    (command) => set(command.hrm)
  );
});

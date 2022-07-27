import { derived, writable } from "svelte/store";
import { connect } from "./ble";

function createConnection() {
  const { subscribe, update, set } = writable([false, {}]);

  return {
    subscribe,
    async connect(...triggers) {
      this.connection = await connect((message) => {
        let command;
        try {
          command = JSON.parse(message);
        } catch (e) {
          console.warn("Could not parse message", message);
          return;
        }

        console.log("[command]", command);

        update(([connected, state]) => [connected, {
          ...state,
          [command.t]: command
        }]);
      });

      set([true, {}]);

      for(const trigger of triggers){
        trigger(this.connection);
      }
    },
    disconnect() {
      if (this.connection) {
        this.connection.close();
        this.connection = undefined;
      }

      set([false, {}])
    },
    toggle(...triggers){
      if(this.connection){
        this.disconnect();
      } else {
        this.connect(...triggers);
      }
    }
  }
}

export const connection = createConnection();
export const messages = derived(connection, ([,messages]) => messages);
export const isConnected = derived(connection, ([isConnected,]) => isConnected);
export const alarms = derived(messages, (commands) => commands['alarms']?.alarms ?? []);
export const temperature = derived(messages, (commands) => commands['temperature']?.temperature ?? 0);
export const steps = derived(messages, (commands) => commands['steps']?.steps ?? 0);
export const battery = derived(messages, (commands) => commands['status']?.bat ?? 0);
export const hrm = derived(messages, (commands) => commands['hrm']?.alarms ?? { bpm: 0, confidence: 0 });



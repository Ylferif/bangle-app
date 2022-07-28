import { derived, Readable, writable } from "svelte/store";
import { connect } from "./ble";

function createConnection() {
  const { subscribe, update, set } = writable<[boolean, Record<string, any>]>([false, {}]);

  return {
    connection: undefined,
    subscribe,
    async connect({ triggers, polls }) {
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

      this.interval = setInterval(async () => {

        if(!this.connection?.isOpen) {
          clearInterval(this.interval);
          this.interval = undefined;
          return;
        }

        for(const poll of polls) {
          await poll(this.connection);
        }

      }, 10 * 1000);

      update(([, state]) => [true, state]);

      for(const trigger of triggers){
        await trigger(this.connection);
      }
    },
    async disconnect(cleanups) {
      if(this.interval){
        clearInterval(this.interval);
        this.interval = undefined;
      }

      for(const cleanup of cleanups){
        await cleanup(this.connection);
      }

      if (this.connection) {
        this.connection.close();
        this.connection = undefined;
      }

      update(([, state]) => [false, state]);
    },
    toggle(triggersAndPolls, cleanups){
      if(this.connection){
        this.disconnect(cleanups);
      } else {
        this.connect(triggersAndPolls);
      }
    },
  }
}

export const connection = createConnection();
export const messages = derived(connection, ([,messages]) => messages);
export const isConnected = derived(connection, ([isConnected,]) => isConnected);
export const alarms = derived(messages, (commands) => commands['alarms']?.alarms ?? []);
export const temperature = derived(messages, (commands) => commands['temperature']?.temperature ?? 0);
export const steps = derived(messages, (commands) => commands['steps']?.steps ?? 0);
export const battery = derived(messages, (commands) => commands['status']?.bat ?? 0);
export const hrm = derived(messages, (commands) => commands['hrm']?.hrm ?? { bpm: 0, confidence: 0 });



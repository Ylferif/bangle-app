import { derived, writable } from "svelte/store";
import type { Readable } from "svelte/store";
import { connect } from "./ble";
import type { IPuckConnection } from "./puck";

export type State = [boolean, Record<string, any>];

export type ConnectionCallback = (connection: IPuckConnection) => void;

export interface IConnectionStore extends Readable<State> {
  connection: IPuckConnection | undefined;
  connect(setup: { triggers: ConnectionCallback[], polls: ConnectionCallback[] }): Promise<void>;
  disconnect(cleanups: ConnectionCallback[]): Promise<void>;
  toggle(triggersAndPolls: {
    triggers: ConnectionCallback[],
    polls: ConnectionCallback[]
  }, cleanups: ConnectionCallback[]): Promise<void>
}


function createConnection(): IConnectionStore {
  const { subscribe, update } = writable<[boolean, Record<string, any>]>([false, {}]);

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
      }, () => {

        update(([, state]) => [false, state]);

      });

      const poll = async () => {
        if (!this.connection?.isOpen) {
          return;
        }

        for (const poll of polls) {
          await poll(this.connection);
        }

        this.timeout = setTimeout(poll, 10 * 1000);
      };

      poll();

      update(([, state]) => [true, state]);

      for (const trigger of triggers) {
        await trigger(this.connection);
      }
    },
    async disconnect(cleanups) {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = undefined;
      }

      for (const cleanup of cleanups) {
        await cleanup(this.connection);
      }

      if (this.connection) {
        this.connection.close();
        this.connection = undefined;
      }

      update(([, state]) => [false, state]);
    },
    toggle(triggersAndPolls, cleanups) {
      if (this.connection) {
        return this.disconnect(cleanups);
      }
      
      return this.connect(triggersAndPolls);
    },
  }
}

export const connection = createConnection();
export const messages = derived(connection, ([, messages]) => messages);
export const isConnected = derived(connection, ([isConnected,]) => isConnected);
export const alarms = derived(messages, (commands) => commands['alarms']?.alarms ?? []);
export const temperature = derived(messages, (commands) => commands['temperature']?.temperature);
export const steps = derived(messages, (commands) => commands['steps']?.steps);
export const battery = derived(messages, (commands) => commands['status']?.bat);
export const hrm = derived(messages, (commands) => commands['hrm']?.hrm);



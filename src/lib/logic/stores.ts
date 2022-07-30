import type { Readable } from "svelte/store";
import { derived, writable } from "svelte/store";
import { connect } from "./ble";
import type { IPuckConnection } from "./puck";

export type State = [boolean, Record<string, any>];

export type ConnectionCallback = (connection: IPuckConnection) => Promise<void>;

export interface IConnectionStore extends Readable<State> {
  connection: IPuckConnection | undefined;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  toggle(start: ConnectionCallback, stop: ConnectionCallback): Promise<void>
}


function createConnection(): IConnectionStore {
  const { subscribe, update } = writable<[boolean, Record<string, any>]>([false, {}]);

  return {
    connection: undefined,
    subscribe,
    async connect() {
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

      update(([, state]) => [true, state]);
    },
    async disconnect() {
      if (this.connection) {
        this.connection.close();
        this.connection = undefined;
      }

      update(([, state]) => [false, state]);
    },
    async toggle(start, stop) {
      if (this.connection) {
        await stop(this.connection);
        await this.disconnect();
      } else {
        await this.connect();
        await start(this.connection);
      }
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



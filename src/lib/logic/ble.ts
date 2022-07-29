import Puck, { IPuckConnection } from "./puck";

export function runCode(connection: IPuckConnection, code: string): Promise<void> {
  return new Promise((resolve) => connection.write(`\x03\x10if(1){${code}}\n`, resolve));
}

export async function writeFile(connection: IPuckConnection, name: string, content: string): Promise<void> {
  const code = `require('Storage').write('${name}',${content});`;

  return runCode(connection, code);
}

export function connect(handleMessage: (message: string) => void, onDisconnect?: () => void): Promise<IPuckConnection> {
  return new Promise((resolve, reject) =>
    Puck.connect((connection) => {
      if (!connection) {
        reject("Failed to connect");
        return;
      }

      let buffer = "";

      connection.on("data", (data) => {
        buffer += data;
        const lines = buffer.split("\n");
        buffer = lines.pop();

        for (const line of lines) {
          handleMessage(line);
        }
      });

      resolve(connection);
    }, onDisconnect)
  );
}

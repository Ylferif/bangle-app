import Puck from "./puck";

export function runCode(connection, code) {
  return connection.write(`\x03\x10if(1){${code}}\n`);
}

export function connect(handleMessage) {
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
    })
  );
}

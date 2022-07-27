const Puck = (window as any).Puck;

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

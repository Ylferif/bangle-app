function runCode(connection, code) {
  return connection.write(`\x03\x10if(1){${code}}\n`);
}

export async function requestAlarms(connection) {
  const code = `
    (function(){
        const alarms = require("sched").getAlarms();
        Bluetooth.println(JSON.stringify({ t: 'alarms', alarms: alarms }));
    })();
`;

  return runCode(connection, code);
}

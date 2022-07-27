import { runCode } from "./ble";

export async function requestAlarms(connection) {
  const code = `
    (function(){
        const alarms = require("sched").getAlarms();
        Bluetooth.println(JSON.stringify({ t: 'alarms', alarms: alarms }));
    })();
`;

  return runCode(connection, code);
}

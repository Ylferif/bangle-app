import { runCode } from "./ble";
import type { IPuckConnection } from "./puck";

const alarms = `Bluetooth.println(JSON.stringify({ t: 'alarms', alarms: require("sched").getAlarms() }));`;

const temperature = `Bluetooth.println(JSON.stringify({ t: 'temperature', temperature: E.getTemperature() }));`;

const steps = `Bluetooth.println(JSON.stringify({ t: 'steps', steps: Bangle.getHealthStatus('day').steps }));`;

const hrmStart = `
Bangle.setHRMPower(true);
Bangle.on('HRM', (hrm) => {
  Bluetooth.println(JSON.stringify({ t: 'hrm', hrm: {
    bpm: hrm.bpm,
    confidence: hrm.confidence
  } }));
});
`;
const hrmStop = `Bangle.setHRMPower(false);`;

const barStart = `
Bangle.setBarometerPower(true);
Bangle.on('pressure', (pressure) => {
  Bluetooth.println(JSON.stringify({ t: 'pressure', pressure: pressure }));
});
`;
const barStop = `Bangle.setBarometerPower(false);`;


export function startBangleApp(connection: IPuckConnection): Promise<void> {
  return runCode(connection,`
    ${hrmStart};
    ${barStart}

    if(global.bangleAppTimeout){
      clearTimeout(global.bangleAppTimeout);
      global.bangleAppTimeout = undefined;
    }

    (function bangleAppPoll() {
      ${alarms}
      ${temperature}
      ${steps}

      global.bangleAppTimeout = setTimeout(bangleAppPoll, 1000);
    })();  
  `);
}

export function stopBangleApp(connection: IPuckConnection): Promise<void> {
  return runCode(connection, `
    ${hrmStop}
    ${barStop}
    if(global.bangleAppTimeout){
      clearTimeout(global.bangleAppTimeout);
      global.bangleAppTimeout = undefined;
    }
  `);
}


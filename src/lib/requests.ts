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

export async function requestTemperature(connection) {
  const code = `
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'temperature', temperature: E.getTemperature() }));
    })();
`;

  return runCode(connection, code);
}

export async function requestSteps(connection) {
  const code = `
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'steps', steps: Bangle.getHealthStatus('day').steps }));
    })();
`;

  return runCode(connection, code);
}

export async function beginRequestHeartRate(connection, timeout = undefined) {
  let code = `
    Bangle.setHRMPower(true);
    Bangle.on('HRM', (hrm) => {
      Bluetooth.println(JSON.stringify({ t: 'hrm', hrm: {
        bpm: hrm.bpm,
        confidence: hrm.confidence
      } }));
    });
  `;

  if (timeout) {
    code += `setTimeout(() => Bangle.setHRMPower(false), ${timeout})`;
  }

  return runCode(connection, code);
}

export async function endRequestHeartRate(connection) {
  let code = `Bangle.setHRMPower(false);`;

  return runCode(connection, code);
}
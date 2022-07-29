import { runCode } from "./ble";
import type { IPuckConnection } from "./puck";

export async function requestAlarms(connection: IPuckConnection): Promise<void> {
  const code = `
    (function(){
        const alarms = require("sched").getAlarms();
        Bluetooth.println(JSON.stringify({ t: 'alarms', alarms: alarms }));
    })();
`;

  return runCode(connection, code);
}

export async function requestTemperature(connection: IPuckConnection): Promise<void> {
  const code = `
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'temperature', temperature: E.getTemperature() }));
    })();
`;

  return runCode(connection, code);
}

export async function requestSteps(connection: IPuckConnection): Promise<void> {
  const code = `
    (function(){
        Bluetooth.println(JSON.stringify({ t: 'steps', steps: Bangle.getHealthStatus('day').steps }));
    })();
`;

  return runCode(connection, code);
}

export async function beginRequestHeartRate(connection: IPuckConnection, timeout: number | undefined  = undefined): Promise<void> {
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

export async function endRequestHeartRate(connection: IPuckConnection): Promise<void> {
  let code = `Bangle.setHRMPower(false);`;

  return runCode(connection, code);
}
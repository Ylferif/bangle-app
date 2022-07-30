import { runCode } from "./ble";
import type { IPuckConnection } from "./puck";

export function setTimer(connection: IPuckConnection, hours: number, minutes: number): Promise<void> {

    const ms = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000);
    const id = new Date().getTime();

    const code = `
        const timer = require('shed').newDefaultTimer();
        timer.timer = ${ms};
        require('sched').setAlarm(${id}, timer);
        require('sched').reload();
    `;

    return runCode(connection, code);
}
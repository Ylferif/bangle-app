import { runCode } from "./ble";
import type { IPuckConnection } from "./puck";

export function setTimer(connection: IPuckConnection, hours: number, minutes: number): Promise<void> {

    const ms = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000);
    const id = new Date().getTime();

    const code = `
        const timer = require('sched').newDefaultTimer();
        timer.timer = ${ms};
        require('sched').setAlarm(${id}, timer);
        require('sched').reload();
    `;

    return runCode(connection, code);
}
export function setTime(connection: IPuckConnection): Promise<void> {
    const now = new Date();
    const code = `
        setTime(${now.getTime() / 1000});
        if (E.setTimeZone) {
            E.setTimeZone(${now.getTimezoneOffset() / -60});
        }
    `;
    
    return runCode(connection, code);
}
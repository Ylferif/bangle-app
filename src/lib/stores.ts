import { writable } from "svelte/store";

export const alarms = writable([]);
export const temperature = writable(0);
export const steps = writable(0);
export const hrm = writable({ bpm: 0, confidence: 0 });

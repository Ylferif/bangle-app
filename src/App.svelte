<script lang="ts">
  import Battery from "./lib/Battery.svelte";
  import HeartRate from "./lib/HeartRate.svelte";
  import { startBangleApp, stopBangleApp } from "./lib/logic/requests";
  import { connection, isConnected } from "./lib/logic/stores";
  import NextAlarm from "./lib/NextAlarm.svelte";
  import SetAlarm from "./lib/SetAlarm.svelte";
  import Steps from "./lib/Steps.svelte";
  import Temperature from "./lib/Temperature.svelte";
  import Weather from "./lib/Weather.svelte";

  async function startStop() {
    await connection.toggle(startBangleApp, stopBangleApp);
  }
</script>

<div class="flex flex-col justify-center items-center gap-8 p-10">
  <Weather />
  <SetAlarm />
  <NextAlarm />
  <Temperature />
  <Steps />
  <HeartRate />
  <Battery />

  <button class="fixed z-50 bottom-10 right-8 drop-shadow-lg btn btn-primary hover:animate-pulse" on:click={startStop}
  >{$isConnected ? "Stop" : "Start"}</button
>
</div>

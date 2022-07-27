<script lang="ts">
  import Alarms from "./lib/Alarms.svelte";
  import Battery from "./lib/Battery.svelte";
  import HeartRate from "./lib/HeartRate.svelte";
  import {
    beginRequestHeartRate,
    endRequestHeartRate,
    requestAlarms,
    requestSteps,
    requestTemperature,
  } from "./lib/requests";
  import Steps from "./lib/Steps.svelte";
  import { connection, isConnected } from "./lib/stores";
  import Temperature from "./lib/Temperature.svelte";
  import { fetchAndStoreWeather } from "./lib/weather";
  import Weather from "./lib/Weather.svelte";

  async function startStop() {
    await connection.toggle(
      [
        requestTemperature,
        requestAlarms,
        requestSteps,
        (connection) => beginRequestHeartRate(connection, 10 * 60 * 1000),
      ],
      [endRequestHeartRate]
    );
  }

  async function syncWeather(event: CustomEvent<{ apiKey: string }>) {
    await connection.one((connection) =>
      fetchAndStoreWeather(connection, event.detail.apiKey)
    );
  }
</script>

<div class="flex flex-col justify-center items-center gap-8 p-10">
  <Weather on:sync={syncWeather} />
  <Alarms />
  <Temperature />
  <Steps />
  <HeartRate />
  <Battery />

  <div class="card w-96 bg-base-200 shadow-xl">
    <div class="card-body">
      <div class="card-actions">
        <button class="btn btn-primary" on:click={startStop}
          >{$isConnected ? "Stop" : "Start"}</button
        >
      </div>
    </div>
  </div>
</div>

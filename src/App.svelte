<script lang="ts">
  import Alarms from "./lib/Alarms.svelte";
  import { connect } from "./lib/ble";
  import HeartRate from "./lib/HeartRate.svelte";
  import {
    beginRequestHeartRate,
    requestAlarms,
    requestSteps,
    requestTemperature,
  } from "./lib/requests";
  import Steps from "./lib/Steps.svelte";
  import { alarms, hrm, steps, temperature } from "./lib/stores";
  import Temperature from "./lib/Temperature.svelte";
  import { fetchAndStoreWeather } from "./lib/weather";
  import Weather from "./lib/Weather.svelte";

  let connection;

  let loading = false;
  let apiKey = localStorage.getItem("weather-api-key") ?? "";
  let status = "Ready";

  function handleMessage(message) {
    let command;
    try {
      command = JSON.parse(message);
    } catch (e) {
      console.warn("Could not parse message", message);
      return;
    }

    console.log("[command]", command);

    switch (command.t) {
      case "alarms":
        alarms.set(command.alarms);
        break;
      case "temperature":
        temperature.set(command.temperature);
        break;
      case "steps":
        steps.set(command.steps);
        break;
      case "hrm":
        hrm.set(command.hrm);
        break;
    }
  }

  async function handleSync() {
    loading = true;

    if (!connection || !connection.isOpen) {
      connection = await connect(handleMessage);
    }

    try {
      await requestAlarms(connection);
      await requestTemperature(connection);
      await requestSteps(connection);
      await beginRequestHeartRate(connection, 60000);
      await fetchAndStoreWeather(connection, apiKey);
      status = "Syncronized Successfully";
    } catch (e) {
      status = "Syncronization Failed";
      console.error(e);
    } finally {
      loading = false;
    }
  }
</script>

<div class="flex flex-col justify-center items-center gap-8 p-10">
  <Weather bind:apiKey />
  <Alarms />
  <Temperature />
  <Steps />
  <HeartRate />

  <button class="btn btn-primary" class:loading on:click={handleSync}
    >{loading ? "Syncing..." : "Sync"}</button
  >

  <div class="alert">{status}</div>
</div>

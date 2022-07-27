<script lang="ts">
  import { requestAlarms } from "./lib/alarms";
  import Alarms from "./lib/Alarms.svelte";
  import { fetchAndStoreWeather } from "./lib/weather";
  import Weather from "./lib/Weather.svelte";

  import { connect } from "./lib/ble";

  let connection;

  let loading = false;
  let apiKey = localStorage.getItem("weather-api-key") ?? "";
  let alarms = [];
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
        alarms = command.alarms;
        break;
    }
  }

  async function handleSync() {
    loading = true;

    if (connection) {
      connection.close();
      connection = undefined;
    }

    connection = await connect(handleMessage);

    try {
      await requestAlarms(connection);
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
  <Alarms bind:alarms />

  <button class="btn btn-primary" class:loading on:click={handleSync}
    >{loading ? "Syncing..." : "Sync"}</button
  >

  <div class="alert">{status}</div>
</div>

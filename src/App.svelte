<script lang="ts">
  import Alarms from "./lib/Alarms.svelte";
  import Battery from "./lib/Battery.svelte";
  import HeartRate from "./lib/HeartRate.svelte";
  import Steps from "./lib/Steps.svelte";
  import { tryConnect } from "./lib/stores";
  import Temperature from "./lib/Temperature.svelte";
  import { fetchAndStoreWeather } from "./lib/weather";
  import Weather from "./lib/Weather.svelte";

  let loading = false;
  let apiKey = localStorage.getItem("weather-api-key") ?? "";
  let status = "Ready";

  async function handleSync() {
    tryConnect([
      async (connection) => {
        loading = true;
        try {
          await fetchAndStoreWeather(connection, apiKey);
          status = "Success.";
        } catch (e) {
          status = "Failed.";
        } finally {
          loading = false;
        }
      },
    ]);
  }
</script>

<div class="flex flex-col justify-center items-center gap-8 p-10">
  <Weather bind:apiKey />
  <Alarms />
  <Temperature />
  <Steps />
  <HeartRate />
  <Battery />

  <button class="btn btn-primary" class:loading on:click={handleSync}
    >{loading ? "Syncing..." : "Sync"}</button
  >

  <div class="alert">{status}</div>
</div>

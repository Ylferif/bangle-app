<script lang="ts">
  import { fetchAndStoreWeather } from "./lib/weather";
  import Weather from "./lib/Weather.svelte";

  let apiKey = localStorage.getItem("weather-api-key") ?? "";
  let status = "Ready";

  async function handleSync() {
    try {
      await fetchAndStoreWeather(apiKey);
      status = "Successfully uploaded weather data";
    } catch (e) {
      status = "Failed to upload weather data";
      console.error(e);
    }
  }
</script>

<div class="flex flex-col justify-center items-center gap-8 p-10">
  <Weather bind:apiKey />

  <button class="btn btn-primary" on:click={handleSync}>Sync</button>

  <div class="alert">{status}</div>
</div>

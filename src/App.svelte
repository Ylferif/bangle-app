<script lang="ts">
  import { fetchAndStoreWeather } from "./lib/weather";
  import Weather from "./lib/Weather.svelte";

  let status = "Ready";

  async function handleSync(event: CustomEvent<{ apiKey: string }>) {
    try {
      await fetchAndStoreWeather(event.detail.apiKey);
      status = "Successfully uploaded weather data";
    } catch (e) {
      status = "Failed to upload weather data";
      console.error(e);
    }
  }
</script>

<div class="flex flex-col justify-center items-center gap-8 p-10">
  <Weather on:sync={handleSync} />

  <div class="alert">{status}</div>
</div>

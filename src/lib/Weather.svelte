<script lang="ts">
  import { connection, isConnected } from "./stores";
  import { fetchAndStoreWeather } from "./weather";

  let loading = false;
  let apiKey = localStorage.getItem("weather-api-key") ?? "";

  async function handleClick() {
    if(connection.connection) {
      try {
        loading = true;
        await fetchAndStoreWeather(connection.connection, apiKey);
      } finally {
        loading = false;
      }
    }
  }
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Weather</h2>

    <div class="form-control">
      <label class="label">
        <span class="label-text">API Key</span>
      </label>
      <input
        class="input input-bordered w-full"
        type="text"
        bind:value={apiKey}
      />
    </div>

    <div class="card-actions">
      <button class="btn btn-secondary" disabled="{!$isConnected}" class:loading on:click={handleClick}>
        Update
      </button>
    </div>
  </div>
</div>

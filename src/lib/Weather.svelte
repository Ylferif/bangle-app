<script lang="ts">
  import { connection } from "./stores";
  import { fetchAndStoreWeather } from "./weather";

  let apiKey = localStorage.getItem("weather-api-key") ?? "";
  let loading = false;

  async function handleClick() {
    loading = true;
    await connection.one((connection) =>
      fetchAndStoreWeather(connection, apiKey)
    );
    loading = false;
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
      <button class="btn btn-secondary" class:loading on:click={handleClick}>
        Update
      </button>
    </div>
  </div>
</div>

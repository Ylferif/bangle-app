<script lang="ts">
  import { createEventDispatcher } from "svelte";

  let apiKey = localStorage.getItem("weather-api-key") ?? "";

  const dispatcher = createEventDispatcher();

  function handleClick() {
    dispatcher("sync", {
      apiKey,
    });
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
      <button class="btn btn-secondary" on:click={handleClick}> Update </button>
    </div>
  </div>
</div>

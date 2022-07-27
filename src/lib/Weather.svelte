<script lang="js">
  import { createEventDispatcher } from "svelte";
  let apiKey = localStorage.getItem("weather-api-key") ?? "";

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("sync", {
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
      <button class="btn" on:click={handleClick}>Upload</button>
    </div>
  </div>
</div>

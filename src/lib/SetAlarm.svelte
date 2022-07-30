<script lang="ts">
import { setTimer } from "./logic/alarms";


  import { connection, isConnected } from "./logic/stores";

  let hours = 0;
  let minutes = 5;
  let loading = false;

  async function handleClick() {
    loading = true;
    try {
      await setTimer(connection.connection, hours, minutes);
    }
    finally{
      loading = false;
    }    
  }
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Set Timer</h2>
    <div class="flex gap-2">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Hours</span>
        </label>
        <input bind:value={hours} type="number" class="input input-bordered w-full max-w-xs" />
      </div>

      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Minutes</span>
        </label>
        <input bind:value={minutes} type="number" class="input input-bordered w-full max-w-xs" />

      </div>
    </div>

    <div class="card-actions">
      <button class="btn btn-secondary" disabled="{!$isConnected || (hours + minutes === 0)}" class:loading on:click={handleClick}>
        Set
      </button>
    </div>
  </div>
</div>

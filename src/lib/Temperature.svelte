<script lang="ts">
  import { onDestroy } from "svelte";
  import { temperature } from "./stores";

  let temperatureValue = 0;
  const unsubscribe = temperature.subscribe(
    (value) => (temperatureValue = value)
  );

  onDestroy(unsubscribe);
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Temperature</h2>

    <span>{temperatureValue - 6}&#8451; ({temperatureValue}&#8451;)</span>
  </div>
</div>

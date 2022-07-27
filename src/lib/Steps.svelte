<script lang="ts">
  import { onDestroy } from "svelte";
  import { steps } from "./stores";

  let stepsValue = 0;
  const unsubscribe = steps.subscribe((value) => (stepsValue = value));

  onDestroy(unsubscribe);
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Steps</h2>

    <span>{stepsValue}</span>
  </div>
</div>

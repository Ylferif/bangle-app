<script lang="ts">
  import { onDestroy } from "svelte";
  import { hrm } from "./stores";

  let bpm = 0;
  let confidence = 0;
  const unsubscribe = hrm.subscribe((value) => {
    bpm = value.bpm;
    confidence = value.confidence;
  });

  onDestroy(unsubscribe);
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Heart Rate</h2>

    <span>{bpm} ({confidence})%</span>
  </div>
</div>

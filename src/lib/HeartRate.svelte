<script lang="ts">
  import { hrm } from "./stores";
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Heart Rate</h2>

    <span>{$hrm.bpm} ({$hrm.confidence}%)</span>
  </div>
</div>

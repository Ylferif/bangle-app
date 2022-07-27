<script lang="ts">
  import { temperature } from "./stores";
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Temperature</h2>

    <span>{$temperature - 6}&#8451; ({$temperature}&#8451;)</span>
  </div>
</div>

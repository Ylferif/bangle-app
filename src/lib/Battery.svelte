<script lang="ts">
  import { battery } from "./logic/stores";
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Battery</h2>

    <div class="flex gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-yellow-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      {$battery}%
    </div>
  </div>
</div>

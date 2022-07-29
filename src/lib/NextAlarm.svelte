<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { alarms } from "./logic/stores";

  let target: number | undefined = undefined;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  function getCurrentTime() {
    const now = new Date();
    return (
      now.getHours() * 1000 * 60 * 60 +
      now.getMinutes() * 1000 * 60 +
      now.getSeconds() * 1000
    );
  }

  const unsubscribe = alarms.subscribe((value) => {
    const currentTime = getCurrentTime();
    const active = value
      .filter((a) => a.on && a.t > currentTime)
      .sort((a, b) => a.t - b.t);
    const timer = active[0];

    if (timer) {
      target = timer.t;
    } else {
      target = undefined;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
  });

  let timeout;
  onMount(() => {
    (function update() {
      if (target !== undefined) {
        let timeLeft = target - getCurrentTime();
        hours = Math.floor(timeLeft / 3600000);
        timeLeft = timeLeft - hours * 3600000;
        minutes = Math.floor(timeLeft / 60000);
        timeLeft = timeLeft - minutes * 60000;
        seconds = Math.floor(timeLeft / 1000);

        if (hours + minutes + seconds <= 0) {
          target = undefined;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
      }

      timeout = setTimeout(update, 1000 - (Date.now() % 1000));
    })();
  });

  onDestroy(() => {
    clearTimeout(timeout);
    unsubscribe();
  });
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Next Alarm</h2>
    <div class="flex gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span class="countdown font-mono text-2xl">
        <span style="--value:{hours};" />:
        <span style="--value:{minutes};" />:
        <span style="--value:{seconds};" />
      </span>
    </div>
  </div>
</div>

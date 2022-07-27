<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { alarms } from "./stores";

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
    <span class="countdown font-mono text-2xl">
      <span style="--value:{hours};" />:
      <span style="--value:{minutes};" />:
      <span style="--value:{seconds};" />
    </span>
  </div>
</div>

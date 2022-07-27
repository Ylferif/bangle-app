<script lang="js">
  let apiKey = localStorage.getItem("weather-api-key") ?? "";

  function writeFile(name, content) {
    return new Promise((resolve) =>
      Puck.write(
        `require('Storage').write('${name}',atob("${btoa(content)}"));\n`,
        resolve
      )
    );
  }

  async function handleClick() {
    const alert = document.getElementById("alert");
    try {
      await fetchAndStoreWeather();
      alert.innerText = "Successfull uploaded weather data";
    } catch (e) {
      alert.innerText = "Failed to upload weather data";
      console.error(e);
    }
  }

  async function fetchAndStoreWeather() {
    localStorage.setItem("weather-api-key", apiKey);

    const { lat, lon } = await new Promise((resolve) =>
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      })
    );

    const data = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      )
    ).json();
    const now = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      )
    ).json();

    const weather = [
      {
        dt: now.dt * 1000,
        temp: now.main.temp,
        weather: now.weather[0].main,
        icon: now.weather[0].icon,
      },

      ...data.list.map((item) => {
        return {
          dt: item.dt * 1000,
          temp: item.main.temp,
          weather: item.weather[0].main,
          icon: item.weather[0].icon,
        };
      }),
    ];

    const location = {
      city: data.city.name,
      sunrise: data.city.sunrise,
      sunset: data.city.sunset,
    };

    const content = { weather, location };

    await writeFile("my-clock-3.app.json", JSON.stringify(content));
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

function writeFile(name, content) {
  return new Promise((resolve) => Puck.write(
    `require('Storage').write('${name}',atob("${btoa(content)}"));\n`, resolve));
}

const apiKey = document.getElementById('apiKey');
apiKey.value = localStorage.getItem('weather-api-key') || '';

document.getElementById("upload").addEventListener("click", async () => {
  const alert = document.getElementById('alert');
  try {
    await fetchAndStoreWeather();
    alert.innerText = "Successfull uploaded weather data";
  } catch (e) {
    alert.innerText = "Failed to upload weather data";
    console.error(e);
  }
});

async function fetchAndStoreWeather() {
  const key = apiKey.value;
  localStorage.setItem('weather-api-key', key);

  const { lat, lon } = await new Promise((resolve) => navigator.geolocation.getCurrentPosition((position) => {
    resolve({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });
  }));

  const data = await (await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`)).json();
  const now = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`)).json();

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
        icon: item.weather[0].icon
      };


    })];

  const location = {
    city: data.city.name,
    sunrise: data.city.sunrise,
    sunset: data.city.sunset
  }

  const content = { weather, location };

  await writeFile('my-clock-3.app.json', JSON.stringify(content));
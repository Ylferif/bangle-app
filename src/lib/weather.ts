declare namespace Puck {
  function write(content: string): Promise<void>;
}

function writeFile(name, content) {
  return Puck.write(
    `require('Storage').write('${name}',atob("${btoa(content)}"));\n`
  );
}

function getLocation(): Promise<{ lat: number; lon: number }> {
  return new Promise((resolve) =>
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    })
  );
}

async function fetchWeather(
  endpoint: string,
  lat: number,
  lon: number,
  apiKey: string
): Promise<any> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/${endpoint}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function fetchAndStoreWeather(apiKey: string) {
  localStorage.setItem("weather-api-key", apiKey);

  const { lat, lon } = await getLocation();

  const data = await fetchWeather("forecast", lat, lon, apiKey);
  const now = await fetchWeather("weather", lat, lon, apiKey);

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
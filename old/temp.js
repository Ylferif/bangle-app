require("Font7x11Numeric7Seg").add(Graphics);
require("Font8x12").add(Graphics);

const storage = require("Storage");
const appId = "my-clock-3";

// util

function getTimeToNextAlarm() {
  const alarms = require("sched").getAlarms();
  const d = new Date();
  const currentTime =
    d.getHours() * 1000 * 60 * 60 +
    d.getMinutes() * 1000 * 60 +
    d.getSeconds() * 1000;

  const active = alarms
    .filter((a) => a.on && a.t > currentTime)
    .sort((a, b) => a.t - b.t);

  const timer = active[0];

  if (timer) {
    return require("sched").getTimeToAlarm(timer);
  }
}

function getFormattedTimeToNextAlarm(precise) {
  const timeLeft = getTimeToNextAlarm();

  let text;
  if (timeLeft !== undefined) {
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor(timeLeft / (1000 * 60));
    const seconds = Math.floor(timeLeft / 1000);

    if (hours >= 1) {
      text = `${hours}h`;
    } else if (minutes >= 1) {
      text = `${minutes}m`;
    } else if (seconds >= 1) {
      if (precise) {
        text = `${seconds}s`;
      } else {
        text = "<1m";
      }
    }
  }

  return text;
}

function formatTime(d) {
  const h = d.getHours();
  const m = d.getMinutes();
  return ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
}

// util-end

// weather
const appData = storage.readJSON(`${appId}.app.json`) || {
  weather: [],
  location: {},
};

function drawSun(x, y, r) {
  g.setColor(1, 1, 0);
  g.fillCircle(x, y, r);
}

function drawRain(x, y, r) {
  g.setColor(1, 1, 1);
  const hr = r / 2;
  g.drawLine(x, y + hr, x, y + r);
  g.drawLine(x - hr, y + hr, x - hr, y + r);
  g.drawLine(x + hr, y + hr, x + hr, y + r);
}

function drawCloud(x, y, r) {
  const hr = r / 2;
  const tr = r / 3;
  const qr = r / 4;
  g.setColor(1, 1, 1);
  g.fillCircle(x - qr, y - qr, hr);
  g.fillCircle(x - hr, y + qr, hr);
  g.fillCircle(x + hr, y + qr, hr);
}

function drawSunCloud(x, y, r) {
  const hr = r / 2;
  drawSun(x + hr, y - hr, hr);
  drawCloud(x, y, r);
}

function drawRainCloud(x, y, r) {
  drawCloud(x, y, r);
  drawRain(x, y, r);
}

function drawWeather(x, y, r, item) {
  switch (item.icon) {
    case "01d":
    case "01n":
      drawSun(x, y, r);
      break;
    case "02d":
    case "02n":
      drawSunCloud(x, y, r);
      break;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      drawCloud(x, y, r);
      break;
    case "10d":
    case "10n":
      drawRainCloud(x, y, r);
      break;
    default:
      console.log("Missing icon: " + item.icon);
  }

  g.setFontAlign(0, 0);
  g.setFont("8x12", 1);
  g.setColor(0, 0, 1);
  g.drawString(Math.round(item.temp), x, y);
  g.setColor(1, 1, 1);

  const dt = new Date(item.dt);
  const h = dt.getHours();
  const formatted = `${h % 12}${h > 12 ? "pm" : "am"}`;

  g.drawString(formatted, x, y - 21, true);
}

function drawWeatherPreview(x, y, d) {
  const now = d.getTime();

  const index =
    appData.weather.findIndex((item) => {
      return item.dt > now;
    }) - 1;

  let data = [];

  if (index >= 0) {
    data = appData.weather.slice(index, index + 3);
  }

  let dx = x;
  for (const item of data) {
    drawWeather(dx, y, 10, item);
    dx += 30;
  }
}

// weather-end

function pageClock() {
  let timeout;

  g.setColor(0, 0, 1);
  g.fillRect(Bangle.appRect);

  (function draw() {
    const d = new Date();
    const time = formatTime(d);
    const date = require("locale").date(d);
    const day = require("locale").dow(d);
    const healthDay = Bangle.getHealthStatus("day");
    const timeToNextAlarm = getFormattedTimeToNextAlarm(false);

    // calibration factor (6)
    const temperature = E.getTemperature() - 6;

    g.setBgColor(0, 0, 1);

    g.setFontAlign(1, -1);
    g.setFont("7x11Numeric7Seg", 5);

    g.setColor(1, 1, 1);
    g.drawString(time, Bangle.appRect.x2 - 5, Bangle.appRect.y + 10, true);

    g.setFont("8x12", 1);
    g.setColor(1, 1, 1);

    g.drawString(
      `${day}, ${date}`,
      Bangle.appRect.x2 - 5,
      Bangle.appRect.y + 70,
      true
    );

    g.setFontAlign(1, 1);
    g.drawString(
      `     ${healthDay.steps} STEPS`,
      Bangle.appRect.x2 - 5,
      Bangle.appRect.y2 - 35,
      true
    );
    g.drawString(
      `     ${temperature}      C`,
      Bangle.appRect.x2 - 5,
      Bangle.appRect.y2 - 20,
      true
    );

    g.drawString(
      `     ${timeToNextAlarm || "-"} ALARM`,
      Bangle.appRect.x2 - 5,
      Bangle.appRect.y2 - 5,
      true
    );

    // weather preview
    drawWeatherPreview(20, Bangle.appRect.y2 - 20, d);

    Bangle.drawWidgets();

    timeout = setTimeout(draw, 60000 - (Date.now() % 60000));
  })();

  return () => {
    clearTimeout(timeout);
  };
}

function pageSteps() {
  let timeout;

  (function draw() {
    g.setBgColor(0, 0, 1);
    g.clearRect(Bangle.appRect);
    g.setFont("8x12", 3);
    g.setColor(1, 1, 1);

    const last10 = Bangle.getHealthStatus();
    const day = Bangle.getHealthStatus("day");

    // header
    g.setFontAlign(0, 1);
    g.drawString(
      "STEPS",
      Bangle.appRect.x + Bangle.appRect.w / 2,
      Bangle.appRect.y + 50
    );
    g.fillRect(
      Bangle.appRect.x + 30,
      Bangle.appRect.y + 50,
      Bangle.appRect.x2 - 30,
      Bangle.appRect.y + 55
    );

    g.setFont("8x12", 2);
    g.setFontAlign(0, -1);
    g.drawString(
      `${day.steps}\n${last10.steps}`,
      Bangle.appRect.x + Bangle.appRect.w / 2,
      Bangle.appRect.y + 60
    );

    timeout = setTimeout(draw, 1000);
  })();

  return () => {
    clearTimeout(timeout);
  };
}

function pageTimer() {
  let timeout;

  (function draw() {
    g.setBgColor(0, 0, 1);
    g.clearRect(Bangle.appRect);
    g.setFont("8x12", 3);
    g.setColor(1, 1, 1);

    let text = getFormattedTimeToNextAlarm(true) || "N/A";

    // header
    g.setFontAlign(0, 1);
    g.drawString(
      "TIMER",
      Bangle.appRect.x + Bangle.appRect.w / 2,
      Bangle.appRect.y + 50
    );
    g.fillRect(
      Bangle.appRect.x + 30,
      Bangle.appRect.y + 50,
      Bangle.appRect.x2 - 30,
      Bangle.appRect.y + 55
    );

    g.setFont("8x12", 2);
    g.setFontAlign(0, -1);
    g.drawString(
      text,
      Bangle.appRect.x + Bangle.appRect.w / 2,
      Bangle.appRect.y + 60
    );

    timeout = setTimeout(draw, 1000);
  })();

  return () => {
    clearTimeout(timeout);
  };
}

function pageHRM() {
  let timeout;
  let hrm;
  let bestBPM;
  let bestConfidence = 0;

  Bangle.setHRMPower(true, appId);
  Bangle.on("HRM", (data) => (hrm = data));

  (function draw() {
    g.setBgColor(0, 0, 1);
    g.clearRect(Bangle.appRect);
    g.setFont("8x12", 3);

    g.setColor(1, 1, 1);

    const bpm = (hrm && hrm.bpm) || 0;
    const confidence = (hrm && hrm.confidence) || 0;

    if (confidence >= 80) {
      bestBPM = bpm;
      bestConfidence = confidence;
    }

    // header
    g.setFontAlign(0, 1);
    g.drawString(
      "HEART",
      Bangle.appRect.x + Bangle.appRect.w / 2,
      Bangle.appRect.y + 50
    );
    g.fillRect(
      Bangle.appRect.x + 30,
      Bangle.appRect.y + 50,
      Bangle.appRect.x2 - 30,
      Bangle.appRect.y + 55
    );

    g.setFont("8x12", 2);
    g.setFontAlign(0, -1);

    if (bestBPM) {
      g.setColor(1, 1, 1);
    } else {
      g.setColor(0.6, 0.6, 0.6);
    }

    g.drawString(
      `${bestBPM || bpm}`,
      Bangle.appRect.x + Bangle.appRect.w / 2,
      Bangle.appRect.y + 60
    );

    g.setColor(1, 1, 1);

    g.fillRect(
      Bangle.appRect.x + 60,
      Bangle.appRect.y + 88,
      Bangle.appRect.x2 - 60,
      Bangle.appRect.y + 89
    );

    g.setFont("8x12", 1);
    g.drawString(
      `${bestConfidence || confidence}%`,
      Bangle.appRect.x + Bangle.appRect.w / 2,
      Bangle.appRect.y + 95
    );

    timeout = setTimeout(draw, 1000);
  })();

  return () => {
    clearTimeout(timeout);
    Bangle.setHRMPower(false, appId);
  };
}

Bangle.setUI("clock");
Bangle.loadWidgets();

let pages = [pageClock, pageTimer, pageSteps, pageHRM];
let currentPage = 0;
let cleanup = pages[currentPage]();
let returnTimeout;

function gotoPage(n) {
  currentPage = n;

  if (cleanup) {
    cleanup();
  }

  cleanup = pages[n]();
}

Bangle.on("touch", () => {
  let nextPage = currentPage + 1;
  if (nextPage >= pages.length) {
    nextPage = 0;
  }

  if (returnTimeout) {
    clearTimeout(returnTimeout);
    returnTimeout = undefined;
  }

  if (nextPage !== 0) {
    returnTimeout = setTimeout(() => gotoPage(0), 60 * 1000);
  }

  gotoPage(nextPage);
});

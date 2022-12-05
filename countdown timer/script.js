const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("sec");

const newYears = "1 jan 2023";

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const mins = Math.floor(totalSeconds / 60) % 60;

  const sec = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = days;

  hoursEl.innerHTML = timeFormat(hours);

  minsEl.innerHTML = timeFormat(mins);

  secEl.innerHTML = timeFormat(sec);
}

function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}
//initial call
countdown();

setInterval(countdown, 1000);

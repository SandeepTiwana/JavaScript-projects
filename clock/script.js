// element selection

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondsEl = document.querySelector(".seconds");

//function.
// first extract them apply

function updateClock() {
  const currentDate = new Date();
  //   setTimeout(updateClock, 1000);

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const hourDeg = (hours / 12) * 360;
  const minDeg = (minutes / 60) * 360;
  const secDeg = (seconds / 60) * 360;

  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minDeg}deg)`;
  secondsEl.style.transform = `rotate(${secDeg}deg)`;
  console.log(hours, minutes, seconds);
}

// updateClock();
setInterval(updateClock, 1000);

let clock = document.getElementById("clock");

setInterval(() => {
  let currentClock = new Date();
  let currentHour = currentClock.getHours();
  let currentMinutes = currentClock.getMinutes();
  let currentSeconds = currentClock.getSeconds();
  let showClock = `${currentHour} : ${currentMinutes} : ${currentSeconds}`;

  clock.innerHTML = showClock;
}, 1000);

let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minuteContainer = document.querySelector(".Minutes");
let secContainer = document.querySelector(".Secons");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function updateClock() {
  const today = new Date();
  let date = today.getDate();
  let day = weekdays[today.getDay()];
  let month = months[today.getMonth()];

  let hours = formatTime(today.getHours());
  let minutes = formatTime(today.getMinutes());
  let seconds = formatTime(today.getSeconds());

  dateContainer.innerHTML = `
  <p>${day}</p>
  <p><span>${date}</span>
  </p><p>${month}</p>`;

  hoursContainer.textContent = hours + ":";
  minuteContainer.textContent = minutes + ":";
  secContainer.textContent = seconds;
}

setInterval(updateClock, 1000);

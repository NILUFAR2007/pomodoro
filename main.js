const audio = new Audio("ES_Button Click - SFX Producer.mp3");
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body")
const timecounter = document.querySelector(".timer-container")
const start = document.querySelector(".start")
const btn = document.querySelector(".start");
const btn2 = document.querySelector(".pause");
const pomodoro = document.querySelector(".pomodoro");
const counter = document.querySelector(".counter");
const min = document.querySelector("#js-minutes");
const sec = document.querySelector("#js-seconds");
const short = document.querySelector(".short");
const long = document.querySelector(".long");

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top:" + e.clientY + "px;";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

pomodoro.addEventListener("click",()=>{
    body.style.background = "rgb(186, 73, 73)"
    timecounter.style.background = "indianred"
    short.classList.remove("shortactive");
    long.classList.remove("longactive");
    start.style.color = "rgb(186, 73, 73)"
    pomodoro.classList.add("pomodoroactive");
    counter.innerText = "25:00";
})

short.addEventListener("click",()=>{
    body.style.background = "#38858a"
    timecounter.style.background = "#528f94"
    pomodoro.classList.remove("pomodoroactive");
    long.classList.remove("longactive");
    start.style.color = "#38858a"
    short.classList.add("shortactive");
    counter.innerText = "05:00";
})

long.addEventListener("click",()=>{
    body.style.background = "#397097"
    timecounter.style.background = "#517c9c"
    pomodoro.classList.remove("pomodoroactive");
    short.classList.remove("shortactive");
    start.style.color = "#397097"
    long.classList.add("longactive");
    counter.innerText = "15:00";
})
btn.addEventListener("click", () => {
  if (btn.textContent === "start") {
    btn.innerText = "pause";
  } else {
    btn.innerText = "start";
  }
});


var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e){ 
    cursor.style.cssText = cursor2.style.cssText = "left: "
    + e.clientX + "px; top:"+ e.clientY + "px;"});


pomodoro.addEventListener("click", function () {
  document.body.style.backgroundColor = "#db524d";
  pomodoro.style.backgroundColor = "#db524d";
  long.style.backgroundColor = "#ffffff00";
  short.style.backgroundColor = "#ffffff00";
  counter.innerText = "25:00";

  var countDownDate; // Set the countdown date as a global variable
  var countdownTimer; // Set the countdown timer as a global variable

  // Start the countdown
  function startCountdown() {
    // Set the date we're counting down to
    countDownDate = new Date().getTime() + 25 * 60 * 1000;

    // Update the countdown every 1 second
    countdownTimer = setInterval(function () {
      // Get the current date and time
      var now = new Date().getTime();

      // Find the distance between now and the countdown date
      var distance = countDownDate - now;

      // Calculate time remaining in minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="countdown"
      counter.innerHTML = minutes + " : " + seconds;

      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdownTimer);
        counter.innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  // Pause the countdown
  function pauseCountdown() {
    clearInterval(countdownTimer);
  }

  // Attach event listeners to the start and pause buttons
  btn.addEventListener("click", startCountdown);
  btn2.addEventListener("click", pauseCountdown);
});
short.addEventListener("click", function () {
  document.body.style.backgroundColor = "#38858a";
  short.style.backgroundColor = "#38858a";
  pomodoro.style.backgroundColor = "#ffffff00";
  long.style.backgroundColor = "#ffffff00";
  counter.innerText = "05:00";

  var countDownDate; // Set the countdown date as a global variable
  var countdownTimer; // Set the countdown timer as a global variable

  // Start the countdown
  function startCountdown() {
    // Set the date we're counting down to
    countDownDate = new Date().getTime() + 5 * 60 * 1000;

    // Update the countdown every 1 second
    countdownTimer = setInterval(function () {
      // Get the current date and time
      var now = new Date().getTime();

      // Find the distance between now and the countdown date
      var distance = countDownDate - now;

      // Calculate time remaining in minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="countdown"
      counter.innerHTML = minutes + " : " + seconds;

      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdownTimer);
        counter.innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  // Pause the countdown
  function pauseCountdown() {
    clearInterval(countdownTimer);
  }

  // Attach event listeners to the start and pause buttons
  btn.addEventListener("click", startCountdown);
  btn2.addEventListener("click", pauseCountdown);
});
long.addEventListener("click", function () {
  document.body.style.backgroundColor = "#397097";
  long.style.backgroundColor = "#397097";
  pomodoro.style.backgroundColor = "#ffffff00";
  short.style.backgroundColor = "#ffffff00";
  counter.innerText = "15:00";
});

// const timer = {
//   pomodoro: 25,
//   shortBreak: 5,
//   longBreak: 15,
//   longBreakInterval: 4,
//   sessions: 0,
// };

// let interval;

// const mainButton = document.getElementById("js-btn");
// mainButton.addEventListener("click", () => {
//   const { action } = mainButton.dataset;
//   if (action === "start") {
//     startTimer();
//   } else {
//     stopTimer();
//   }
// });

// const modeButtons = document.querySelector("#js-mode-buttons");
// modeButtons.addEventListener("click", handleMode);

// function getRemainingTime(endTime) {
//   const currentTime = Date.parse(new Date());
//   const difference = endTime - currentTime;

//   const total = Number.parseInt(difference / 1000, 10);
//   const minutes = Number.parseInt((total / 60) % 60, 10);
//   const seconds = Number.parseInt(total % 60, 10);

//   return {
//     total,
//     minutes,
//     seconds,
//   };
// }

// function startTimer() {
//   let { total } = timer.remainingTime;
//   const endTime = Date.parse(new Date()) + total * 1000;

//   if (timer.mode === "pomodoro") timer.sessions++;

//   mainButton.dataset.action = "stop";
//   mainButton.textContent = "stop";
//   mainButton.classList.add("active");

//   interval = setInterval(function () {
//     timer.remainingTime = getRemainingTime(endTime);
//     updateClock();

//     total = timer.remainingTime.total;
//     if (total <= 0) {
//       clearInterval(interval);

//       switch (timer.mode) {
//         case "pomodoro":
//           if (timer.sessions % timer.longBreakInterval === 0) {
//             switchMode("longBreak");
//           } else {
//             switchMode("shortBreak");
//           }
//           break;
//         default:
//           switchMode("pomodoro");
//       }

//       startTimer();
//     }
//   }, 1000);
// }

// function stopTimer() {
//   clearInterval(interval);

//   mainButton.dataset.action = "start";
//   mainButton.textContent = "start";
//   mainButton.classList.remove("active");
// }

// function updateClock() {
//   const { remainingTime } = timer;
//   const minutes = `${remainingTime.minutes}`.padStart(2, "0");
//   const seconds = `${remainingTime.seconds}`.padStart(2, "0");

//   const min = document.getElementById("js-minutes");
//   const sec = document.getElementById("js-seconds");
//   min.textContent = minutes;
//   sec.textContent = seconds;

//   const progress = document.getElementById("js-progress");
//   progress.value = timer[timer.mode] * 60 - timer.remainingTime.total;
// }

// function switchMode(mode) {
//   timer.mode = mode;
//   timer.remainingTime = {
//     total: timer[mode] * 60,
//     minutes: timer[mode],
//     seconds: 0,
//   };

//   document
//     .querySelectorAll("button[data-mode]")
//     .forEach((e) => e.classList.remove("active"));
//   document.querySelector(`[data-mode="${mode}"]`).classList.add("active");
//   document.body.style.backgroundColor = `var(--${mode})`;
//   document
//     .getElementById("js-progress")
//     .setAttribute("max", timer.remainingTime.total);

//   updateClock();
// }

// function handleMode(event) {
//   const { mode } = event.target.dataset;

//   if (!mode) return;

//   switchMode(mode);
//   stopTimer();
// }

// document.addEventListener("DOMContentLoaded", () => {
//   switchMode("pomodoro");
// });

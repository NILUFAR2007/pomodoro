const audio = new Audio("ES_Button Click - SFX Producer.mp3");
const buttons = document.querySelectorAll("button");
<<<<<<< HEAD
const body = document.querySelector("body")
const timecounter = document.querySelector(".timer-container")
const start = document.querySelector(".start")
const btn = document.querySelector(".start");
const pomodoro = document.querySelector(".pomodoro");
const short = document.querySelector(".short");
const long = document.querySelector(".long");
const counter = document.querySelector(".counter");
=======
const min = document.querySelector("#js-minutes");
const sec = document.querySelector("#js-seconds");
const short = document.querySelector(".short");
const long = document.querySelector(".long");
>>>>>>> origin/gang_dramma

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

<<<<<<< HEAD
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


=======
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e){ 
    cursor.style.cssText = cursor2.style.cssText = "left: "
    + e.clientX + "px; top:"+ e.clientY + "px;";
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
>>>>>>> origin/gang_dramma

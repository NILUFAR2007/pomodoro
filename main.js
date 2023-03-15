const audio = new Audio("ES_Button Click - SFX Producer.mp3");
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body")
const timecounter = document.querySelector(".timer-container")
const start = document.querySelector(".start")
const btn = document.querySelector(".start");
const pomodoro = document.querySelector(".pomodoro");
const short = document.querySelector(".short");
const long = document.querySelector(".long");
const counter = document.querySelector(".counter");

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



const audio = new Audio("ES_Button Click - SFX Producer.mp3");
const buttons = document.querySelectorAll("button");
const short = document.querySelector(".short")
const body = document.querySelector("body")
const timecounter = document.querySelector(".timer-container")
const pomodoro = document.querySelector(".pomodoro")
const start = document.querySelector(".start")
const long = document.querySelector(".long")

buttons.forEach(button => {
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
})

short.addEventListener("click",()=>{
    body.style.background = "#38858a"
    timecounter.style.background = "#528f94"
    pomodoro.classList.remove("pomodoroactive");
    long.classList.remove("longactive");
    start.style.color = "#38858a"
    short.classList.add("shortactive");
})

long.addEventListener("click",()=>{
    body.style.background = "#397097"
    timecounter.style.background = "#517c9c"
    pomodoro.classList.remove("pomodoroactive");
    short.classList.remove("shortactive");
    start.style.color = "#397097"
    long.classList.add("longactive");
})

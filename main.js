const audio = new Audio("ES_Button Click - SFX Producer.mp3");
const buttons = document.querySelectorAll("button");
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

btn.addEventListener("click", () => {
  if (btn.textContent === "start") {
    btn.innerText = "pause";
  } else {
    btn.innerText = "start";
  }
});

pomodoro.addEventListener("click", function () {
  document.body.style.backgroundColor = "#db524d";
  pomodoro.style.backgroundColor = "#db524d";
  long.style.backgroundColor = '#ffffff00'
  short.style.backgroundColor = '#ffffff00'
  counter.innerText = "25:00";
});
short.addEventListener("click", function () {
  document.body.style.backgroundColor = "#38858a";
  short.style.backgroundColor = "#38858a";
  pomodoro.style.backgroundColor = '#ffffff00'
  long.style.backgroundColor = '#ffffff00'
  counter.innerText = "05:00";
});
long.addEventListener("click", function () {
  document.body.style.backgroundColor = "#397097";
  long.style.backgroundColor = "#397097";
  pomodoro.style.backgroundColor = '#ffffff00'
  short.style.backgroundColor = '#ffffff00'
  counter.innerText = "15:00";
});

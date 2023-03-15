const audio = new Audio("ES_Button Click - SFX Producer.mp3");
const buttons = document.querySelectorAll("button");
const short = document.querySelector(".short")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

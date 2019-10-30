// Add your event handlers here
const red = document.querySelector(".red-theme");
red.addEventListener("click", turnRed);

function turnRed() {
  document.querySelector("body").className = "red-theme";
}
function turnWhite() {
  document.querySelector("body").className = "white-theme";
}
function turnBlue() {
  document.querySelector("body").className = "blue-theme";
}
function turnYellow() {
  document.querySelector("body").className = "yellow-theme";
}

document.querySelector("h1").innerText = "Johnny Rocks";
const image = document.querySelector("img");
console.log(image);
image.style.filter = "grayscale(100%)";
image.style.width = "95%";

const eggos = document.createElement("img");
document.querySelector(".container").appendChild(eggos);
eggos.setAttribute(
  "src",
  "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg"
);
eggos.style.width = "50%";
eggos.remove();

document.querySelectorAll("li");


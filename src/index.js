import "./style.css";
import hero from "./taco.png";

const heroImg = new Image();
heroImg.classList.add("img");
heroImg.src = hero;
const container = document.getElementById("content");
container.appendChild(heroImg);
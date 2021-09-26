import { Howl } from "howler";

let triangleShape = "";

for (let i = 0; i < 41; i++) {
  const isEven = i % 2 === 0;
  const x = isEven ? 100 : 0;
  const y = i * 2.5;
  triangleShape += `, ${x}% ${y}%`;
}

document.body.style.setProperty("--triangle-shape", triangleShape.substring(1));

const audio = new Howl({
  src: ["level1.mp3"],
  loop: true,
  volume: 0.75
});

const road = document.querySelector(".road-container");
const psx = document.querySelector(".play-station-container");
const [leftController, rightController] = document.querySelectorAll(".play-station-controller-container");

const start = () => {
  setTimeout(() => {
    psx.classList.remove("hide");
  }, 500);

  setTimeout(() => {
    psx.classList.add("dancing");
    road.classList.add("animated");
    audio.play();
  }, 2000);

  setTimeout(() => {
    leftController.classList.remove("hide");
    rightController.classList.remove("hide");
  }, 11200);

  setTimeout(() => {
    leftController.classList.add("dancing");
    rightController.classList.add("dancing");
  }, 13200);
};

// document.body.addEventListener("click", () => start(), { once: true });
setTimeout(() => start(), 3000);

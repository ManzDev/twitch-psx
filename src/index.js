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
  loop: true
});

audio.play();

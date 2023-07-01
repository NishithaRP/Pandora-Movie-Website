const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let columns;
let fontSize;
let drops;

const initialize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  fontSize = 14;
  columns = canvas.width / fontSize;
  drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }
};

const draw = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = String.fromCharCode(Math.floor(Math.random() * 95) + 32);
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
};

window.addEventListener("resize", initialize);

initialize();
setInterval(draw, 50);
// Efek bintang neon
const canvas = document.getElementById("particle-bg");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let stars = [];
for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() + 0.5
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#b026ff";
  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  moveStars();
  requestAnimationFrame(animateStars);
}

function moveStars() {
  for (let s of stars) {
    s.y += s.d;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  }
}
animateStars();

// Tombol musik dan tema
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("toggle-music");
const themeBtn = document.getElementById("toggle-theme");

let musicPlaying = false;
musicBtn.addEventListener("click", () => {
  if (musicPlaying) {
    music.pause();
  } else {
    music.play();
  }
  musicPlaying = !musicPlaying;
  musicBtn.textContent = musicPlaying ? "🔊" : "🎵";
});

let darkMode = true;
themeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.style.background = darkMode ? "#000" : "#fff";
  document.body.style.color = darkMode ? "#fff" : "#000";
});

// Efek partikel
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 1.5,
    d: Math.random() * 0.5
  });
}

function animateStars() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.fillStyle = "#fff";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(150, 0, 255, ${Math.random()})`;
    ctx.fill();
    s.y += s.d;
    if (s.y > innerHeight) s.y = 0;
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// Intro screen (versi fix)
const intro = document.getElementById("intro");
const lanjutBtn = document.getElementById("lanjutBtn");
const bgm = document.getElementById("bgm");

lanjutBtn.addEventListener("click", () => {
  // mainkan musik dengan volume rendah
  bgm.volume = 0.3;
  bgm.play().catch(() => console.log("Audio autoplay diblokir, tapi tombol bekerja"));

  // animasi hilang
  intro.style.transition = "opacity 1s ease";
  intro.style.opacity = "0";

  // hilangkan elemen intro sepenuhnya
  setTimeout(() => {
    intro.style.display = "none";
    document.body.style.overflowY = "auto";
  }, 1000);
});

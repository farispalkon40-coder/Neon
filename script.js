// === NEON STORE V11 ULTRA ===

// Ambil elemen penting
const intro = document.getElementById("intro");
const lanjutBtn = document.getElementById("lanjutBtn");
const bgm = document.getElementById("bgm");
const soundToggle = document.getElementById("soundToggle");
const store = document.getElementById("store");
const logo = document.getElementById("logo");

// ==== INTRO HANDLER ====
lanjutBtn.addEventListener("click", () => {
  // Putar musik saat user klik
  bgm.volume = 0.4;
  bgm.play().catch(() => console.log("Autoplay diblokir, user interaksi sudah diterima"));

  // Efek fade portal
  intro.style.transition = "opacity 1.2s ease";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    document.body.style.overflowY = "auto";
  }, 1200);
});

// ==== SOUND CONTROL ====
let soundOn = true;
soundToggle.addEventListener("click", () => {
  if (soundOn) {
    bgm.pause();
    soundToggle.textContent = "🔇";
  } else {
    bgm.play();
    soundToggle.textContent = "🔊";
  }
  soundOn = !soundOn;
});

// ==== SCROLL FADE EFFECT ====
const fadeElements = document.querySelectorAll(".fade-in");

function checkFade() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", checkFade);
checkFade();

// ==== LOGO SECRET CLICK (ADMIN LOGIN) ====
let clickCount = 0;
logo.addEventListener("click", () => {
  clickCount++;
  if (clickCount >= 5) {
    clickCount = 0;
    const pass = prompt("Masukkan password Admin:");
    if (pass === "neonpromax") {
      alert("Selamat datang di Admin Promax!");
      document.body.classList.add("admin-mode");
    } else {
      alert("Password salah!");
    }
  }
});

// ==== PRODUK DEFAULT ====
const productGrid = document.getElementById("productGrid");

// Cek data localStorage
let products = JSON.parse(localStorage.getItem("neonProducts")) || [];

// Render produk
function renderProducts() {
  productGrid.innerHTML = "";
  if (products.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "Belum ada produk. Masuk mode Admin untuk menambahkan.";
    msg.style.textAlign = "center";
    msg.style.opacity = "0.7";
    productGrid.appendChild(msg);
    return;
  }

  products.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card fade-in";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3 contenteditable="${document.body.classList.contains("admin-mode")}">${p.name}</h3>
      <p contenteditable="${document.body.classList.contains("admin-mode")}">${p.price}</p>
      <button class="btn-buy">Beli Sekarang</button>
    `;
    const btn = card.querySelector(".btn-buy");
    btn.addEventListener("click", () => {
      const wa = `https://wa.me/6281266435034?text=HALO%20KAK%20NEON%20DODON%20SAYA%20MAU%20PESAN%0ANAMA:%20${encodeURIComponent(p.name)}%0APRICE:%20${encodeURIComponent(p.price)}`;
      window.open(wa, "_blank");
    });
    productGrid.appendChild(card);
  });
  checkFade();
}
renderProducts();

// ==== ADMIN SAVE LISTENER ====
window.addEventListener("beforeunload", () => {
  if (document.body.classList.contains("admin-mode")) {
    const updated = [];
    document.querySelectorAll(".product-card").forEach(card => {
      const img = card.querySelector("img").src;
      const name = card.querySelector("h3").textContent;
      const price = card.querySelector("p").textContent;
      updated.push({ image: img, name, price });
    });
    localStorage.setItem("neonProducts", JSON.stringify(updated));
  }
});

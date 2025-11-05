// Admin Promax - mode lokal
let clickCount = 0;

document.querySelector(".logo h1").addEventListener("click", () => {
  clickCount++;
  if (clickCount >= 5) {
    const pass = prompt("Masukkan password admin:");
    if (pass === "neonpromax") {
      alert("Selamat datang di Admin Promax!");
      enableAdminMode();
    } else {
      alert("Password salah!");
    }
    clickCount = 0;
  }
});

function enableAdminMode() {
  document.querySelectorAll(".card").forEach(card => {
    card.contentEditable = true;
    card.style.outline = "2px dashed #ff00ff";
  });
  alert("Mode edit aktif! Klik teks produk untuk ubah langsung.");
}

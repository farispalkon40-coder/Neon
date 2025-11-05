function lanjut() {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "home.html";
  }, 800);
}

function bukaPopup(nama, harga) {
  document.getElementById('popup-name').innerText = nama;
  document.getElementById('popup-price').innerText = harga;
  const msg = `HALO KAK NEON DODON SAYA MAU PESAN%0A%0ANAMA: ${nama}%0APRICE: ${harga}`;
  const waNumber = "6281266435034";
  const url = `https://wa.me/${waNumber}?text=${msg}`;
  document.getElementById('wa-link').href = url;
  document.getElementById('popup').style.display = 'flex';
}

function tutupPopup() {
  document.getElementById('popup').style.display = 'none';
}

// Efek transisi keluar
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add('fade-in');
});

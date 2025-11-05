// === ADMIN PRO MAX PANEL ===

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("admin-mode")) {
    createAdminPanel();
  }
});

function createAdminPanel() {
  const panel = document.createElement("div");
  panel.className = "admin-panel glow";

  panel.innerHTML = `
    <h2>⚙️ Admin Panel ProMax</h2>
    <div class="admin-controls">
      <button id="addProduct" class="admin-btn">+ Tambah Produk</button>
      <button id="deleteProduct" class="admin-btn">❌ Hapus Produk Terakhir</button>
      <button id="resetData" class="admin-btn">💾 Reset Semua</button>
    </div>
  `;

  document.body.appendChild(panel);

  const addBtn = panel.querySelector("#addProduct");
  const delBtn = panel.querySelector("#deleteProduct");
  const resetBtn = panel.querySelector("#resetData");

  addBtn.addEventListener("click", () => {
    const name = prompt("Nama produk:");
    const price = prompt("Harga produk:");
    const image = prompt("Link gambar produk (URL):", "https://via.placeholder.com/200");

    if (!name || !price) return alert("Data tidak lengkap!");

    const products = JSON.parse(localStorage.getItem("neonProducts")) || [];
    products.push({ name, price, image });
    localStorage.setItem("neonProducts", JSON.stringify(products));

    alert("✅ Produk baru ditambahkan!");
    location.reload();
  });

  delBtn.addEventListener("click", () => {
    let products = JSON.parse(localStorage.getItem("neonProducts")) || [];
    if (products.length === 0) return alert("Tidak ada produk untuk dihapus!");
    products.pop();
    localStorage.setItem("neonProducts", JSON.stringify(products));
    alert("❌ Produk terakhir dihapus!");
    location.reload();
  });

  resetBtn.addEventListener("click", () => {
    if (confirm("⚠️ Yakin mau reset semua data produk?")) {
      localStorage.removeItem("neonProducts");
      alert("Semua data produk dihapus!");
      location.reload();
    }
  });
  }

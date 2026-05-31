import { store } from "../store/store.js";

const container = document.querySelector("[data-app='katalog']");

export function renderProductList() {
  const produkList = store.state.katalog;

  container.innerHTML =
    /* HTML */
    ` ${produkList.map((produk) => cardProduct(produk)).join("")}`;
}

container.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action='add']");
  if (!btn) return;
  const produkId = Number(btn.dataset.id);
  const produkTerpilih = store.state.katalog.find((p) => p.id === produkId);

  const keranjang = store.state.keranjang;
  const barangSudahAda = keranjang.find((item) => item.id === produkId);

  if (barangSudahAda) {
    store.state.keranjang = keranjang.map((item) =>
      item.id === produkId ? { ...item, qty: item.qty + 1 } : item,
    );
  } else {
    store.state.keranjang = [
      ...store.state.keranjang,
      { ...produkTerpilih, qty: 1 },
    ];
  }
});

function cardProduct(produk) {
  return (
    /* HTML */
    `
      <div class="p-5 bg-white rounded-2xl">
        <h3 class="text-base font-medium mb-2">${produk.nama}</h3>
        <p class="text-sm mb-5">
          Harga: Rp ${produk.harga.toLocaleString("id-ID")}
        </p>
        <button
          class="text-sm bg-slate-800 rounded-3xl text-gray-100 py-2 px-6 w-full"
          data-id="${produk.id}"
          data-action="add"
        >
          Tambah ke Keranjang
        </button>
      </div>
    `
  );
}

import { store } from "../store/store.js";
import { icons } from "../utils/icons.js";
const container = document.querySelector("[data-div='header']");

const navItems = [
  {
    name: "Data Mahasiswa",
    href: "../",
  },
  {
    name: "Konversi Suhu",
    href: "../konversisuhu.html",
  },
  {
    name: "Class",
    href: "../class.html",
  },
];

export function renderHeader() {
  const jumlahBarang = store.state.keranjang.reduce(
    (total, item) => total + item.qty,
    0,
  );

  container.innerHTML = /* HTML */ `
    <nav class="flex justify-between items-center px-5 py-3">
      <h1 class="text-gray-200 font-light text-3xl">
        <span></span>
        Lhopee
      </h1>
      <div class="flex gap-5 text-sm text-gray-200">
        ${navItems
          .map((item) => `<a href="${item.href}">${item.name}</a>`)
          .join("")}
      </div>
      <div
        class="text-sm py-1 px-3 bg-gray-200 rounded-3xl font-medium text-gray-600 flex items-center gap-2"
      >
        <span>${icons().cart}</span>
        <p class="font-bold">${jumlahBarang}</p>
      </div>
    </nav>
  `;
}

store.subscribe("keranjang", renderHeader);

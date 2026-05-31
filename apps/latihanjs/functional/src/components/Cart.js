import { store } from "../store/store.js";
import { icons } from "../utils/icons.js";

const container = document.querySelector("[data-app='keranjang']");

export function renderCart() {
  const isiKeranjang = store.state.keranjang;

  const total = isiKeranjang.reduce((data, item) => {
    return data + item.harga * item.qty;
  }, 0);

  container.innerHTML = /* HTML */ `
    ${isiKeranjang.length === 0
      ? '<p class="text-sm text-gray-600 animate-pulse">Kerangang masih kosong...</p>'
      : /* HTML */ `
          <ul>
            ${isiKeranjang
              .map(
                (item) => /* HTML */ `
                  <li class="px-5 mb-2 flex justify-between items-center">
                    <div class="">
                      ${item.nama} - Rp ${item.harga.toLocaleString("id-ID")}
                    </div>
                    <div class="flex items-center gap-5">
                      <div class="flex items-center justify-between w-20">
                        <button
                          data-id=${item.id}
                          data-action="decrease"
                          class="text-red-400"
                        >
                          ${icons().decrease}
                        </button>
                        <span>${item.qty}</span>
                        <button
                          data-id=${item.id}
                          data-action="increase"
                          class="text-green-600"
                        >
                          ${icons().increase}
                        </button>
                      </div>
                      <button
                        data-id=${item.id}
                        data-action="delete"
                        class="text-red-600 flex items-center"
                      >
                        ${icons().trash}
                      </button>
                    </div>
                  </li>
                `,
              )
              .join("")}
          </ul>
        `}
    <hr class="border-2 border-gray-300 my-5" />
    <h3 class="text-[#16a34a]">Total: Rp ${total}</h3>
  `;
}

container.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const action = btn.dataset.action;
  const keranjang = store.state.keranjang;
  const barang = keranjang.find((item) => item.id === id);

  const actions = {
    decrease: () => {
      if (barang.qty <= 1) {
        actions.delete();
        return;
      }
      store.state.keranjang = keranjang.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item,
      );
    },
    increase: () =>
      (store.state.keranjang = keranjang.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      )),
    delete: () =>
      (store.state.keranjang = keranjang.filter((item) => item.id !== id)),
  };

  actions[action]?.();
});

store.subscribe("keranjang", renderCart);

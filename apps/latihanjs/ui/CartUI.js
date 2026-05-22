export class CartUI {
  render(items, total) {
    const cartItem = document.getElementById("cart-items");
    if (!cartItem) return;

    cartItem.innerHTML = "";

    if (!cartItem) {
      console.log("notfound cardItem");
      return;
    }
    if (!items || items.length === 0) {
      cartItem.innerHTML = "Belum ada item di keranjang";
      return;
    }
    items.forEach((item) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = /*html*/ `
        <div class="cart-item-info">
          <h5>${item.name}</h5>
          <p>Rp. ${item.price.toLocaleString("id-ID")}</p>
        </div>
        <div class="cart-item-qty">
          <button data-id="${item.id}" data-action="decrease">-</button>
          <span>${item.qty}</span>
          <button data-id="${item.id}" data-action="increase">+</button>
        </div>
      `;

      cartItem.appendChild(div);
    });

    const totalContainer = document.getElementById("cart-total");
    if (!totalContainer) return;

    totalContainer.innerText = `Rp. ${total.toLocaleString("id-ID")}`;
  }
}

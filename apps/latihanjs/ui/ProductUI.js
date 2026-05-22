export class ProductUI {
  render(products) {
    const container = document.getElementById("products");
    if (!container) return;
    container.innerHTML = "";

    products.forEach((product) => {
      const item = document.createElement("div");

      item.className = "product";

      item.innerHTML = /*html*/ `
          <div class="product-info">
            <h5>${product.name}</h5>
            <p>Rp. ${product.price.toLocaleString("id-ID")}</p>
          </div>
          <button data-id="${product.id}">
              Tambahkan
          </button>
`;

      container.appendChild(item);
    });
  }
}

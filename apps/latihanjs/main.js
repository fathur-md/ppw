import { CartService } from "./models/CartService.js";
import { ProductService } from "./models/ProductService.js";
import { CartUI } from "./ui/CartUI.js";
import { renderHeader } from "./ui/Header.js";
import { ProductUI } from "./ui/ProductUI.js";

const productService = new ProductService();
const cartService = new CartService();

const productUI = new ProductUI();
const cartUI = new CartUI();

function renderProducts() {
  productUI.render(productService.getProducts());
}

function renderCart() {
  cartUI.render(cartService.items, cartService.getTotal());
}

function setupProductEvents() {
  const container = document.getElementById("products");
  if (!container) return;

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-id]");
    if (!btn) return;

    const productId = Number(btn.dataset.id);

    const product = productService.getProductById(productId);
    if (!product) return;

    cartService.tambahItem(product);

    renderCart();
  });
}
function setupCartEvents() {
  const container = document.getElementById("cart");
  if (!container) return;

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-id]");
    if (!btn) return;

    const productId = Number(btn.dataset.id);

    if (btn.dataset.action === "increase") {
      const product = productService.getProductById(productId);
      if (!product) return;

      cartService.tambahItem(product);
    }

    if (btn.dataset.action === "decrease") {
      cartService.hapusItem(productId);
    }
    renderCart();
  });
}

function init() {
  renderHeader();

  renderProducts();
  renderCart();

  setupProductEvents();
  setupCartEvents();
}

init();

import { renderCart } from "./components/Cart.js";
import { renderHeader } from "./components/Header.js";
import { renderProductList } from "./components/ProductList.js";

function init() {
  renderHeader();
  renderProductList();
  renderCart();
}

init();

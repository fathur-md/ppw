import { products } from "../data/products.js";

export class ProductService {
  getProducts() {
    return products;
  }

  getProductById(productId) {
    return products.find((p) => p.id === productId);
  }
}

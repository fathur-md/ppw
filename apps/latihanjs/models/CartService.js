export class CartService {
  constructor() {
    this.items = [];
    this.qty = 0;
    this.total = 0;
  }

  tambahItem(product) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.qty += 1;
      existingItem.total += existingItem.price;
    } else {
      this.items.push({
        ...product,
        qty: 1,
        total: product.price,
      });
    }

    this.qty += 1;
    this.total += product.price;
  }

  hapusItem(productId) {
    const existingItem = this.items.find((item) => item.id === productId);

    if (!existingItem) return;

    existingItem.qty -= 1;
    existingItem.total -= existingItem.price;

    this.qty -= 1;
    this.total -= existingItem.price;

    if (existingItem.qty === 0) {
      this.items = this.items.filter((item) => item.id !== productId);
    }
  }

  getTotal() {
    return this.total;
  }
}

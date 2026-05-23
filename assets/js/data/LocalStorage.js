export class LocalStorage {
  static save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static get(key) {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  }

  static remove(key) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}

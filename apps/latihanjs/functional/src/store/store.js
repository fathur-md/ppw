export function createStore(initialState) {
  const listeners = {};
  function subscribe(key, fn) {
    listeners[key] = listeners[key] || [];
    listeners[key].push(fn);

    return () => {
      listeners[key] = listeners[key].filter((listener) => listener !== fn);
    };
  }

  function notify(key) {
    if (!listeners[key]) return;
    listeners[key].forEach((fn) => fn());
  }

  const state = new Proxy(initialState, {
    set(target, key, value) {
      if (target[key] === value) return true;
      target[key] = value;
      notify(key);
      return true;
    },
  });

  return {
    state,
    subscribe,
  };
}

export const store = createStore({
  katalog: [
    { id: 1, nama: "Kemeja Polos", harga: 100000 },
    { id: 2, nama: "Celana Jeans", harga: 200000 },
    { id: 3, nama: "Topi Baseball", harga: 50000 },
  ],
  keranjang: [],
});

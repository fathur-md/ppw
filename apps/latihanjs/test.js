let state = {
  count: 0,
  name: "Mahasiswa",
};

function setState(newState) {
  state = { ...state, ...newState };
  render();
}

function App() {
  return `
    <div>
      <h1>Hello, ${state.name}</h1>
      
      <p>Count: ${state.count}</p>

      <button id="btn-dec">-</button>
      <button id="btn-inc">+</button>

      <input id="input-name" placeholder="ubah nama" />
    </div>
  `;
}

function render() {
  const root = document.getElementById("app");
  root.innerHTML = App();

  bindEvents();
}

function bindEvents() {
  document.getElementById("btn-inc").onclick = () => {
    setState({ count: state.count + 1 });
  };

  document.getElementById("btn-dec").onclick = () => {
    setState({ count: state.count - 1 });
  };

  document.getElementById("input-name").oninput = (e) => {
    setState({ name: e.target.value });
  };
}

render();

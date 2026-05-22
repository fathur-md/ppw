import { Header } from "./header.js";

const header = document.getElementById("header");

function render() {
  header.innerHTML = Header();
}

render();

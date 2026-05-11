import { renderNavbar } from "./components/navbar.js";

function safe(fn) {
  try {
    fn();
  } catch (e) {
    console.error("UI initialization error:", e);
  }
}

safe(() => renderNavbar());


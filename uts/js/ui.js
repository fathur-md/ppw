import { renderNavbar } from "./components/navbar.js";
import { renderFooter } from "./components/footer.js";

function safe(fn) {
  try {
    fn();
  } catch (e) {
    console.error("UI initialization error:", e);
  }
}

safe(() => renderNavbar());
safe(() => {
  const footer = document.getElementById("footer");
  if (footer) footer.innerHTML = renderFooter();
});

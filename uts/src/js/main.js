import { initNavbar } from "./navbar.js";

window.addEventListener("DOMContentLoaded", () => {
  initNavbar();

  const path = window.location.pathname;
  let pageTitle = "Home";

  if (path.includes("/about/")) {
    pageTitle = "About";
  } else if (path.includes("/contact/")) {
    pageTitle = "Contact";
  }

  document.title = `${pageTitle} - UTS`;
});

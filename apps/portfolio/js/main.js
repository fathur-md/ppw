import { renderGlobalNavbar } from "../../../assets/js/components/navbar.js";
import { renderAboutPage } from "./page/about.js";
import { renderHomePage } from "./page/home.js";
import { renderProjectsPage } from "./page/projects.js";
import { setRoute, state } from "./state.js";

document.getElementById("global-navbar").innerHTML =
  renderGlobalNavbar("../../../");
document.getElementById("global-navbar").classList.add("mb-2");
const appRoot = document.getElementById("app-root");

function handleRoute(routeName) {
  setRoute(routeName);

  const renderView = () => {
    switch (state.currentRoute) {
      case "home":
        appRoot.innerHTML = renderHomePage();
        break;
      case "projects":
        appRoot.innerHTML = renderProjectsPage();
        break;
      case "about":
        appRoot.innerHTML = renderAboutPage();
        break;
      default:
        appRoot.innerHTML = renderHomePage();
        break;
    }
    window.scrollTo(0, 0);
  };

  if (document.startViewTransition) {
    document.startViewTransition(() => renderView());
  } else {
    renderView();
  }
}

document.body.addEventListener("click", (e) => {
  const link = e.target.closest(".nav-btn");
  if (!link) return;

  e.preventDefault();
  const route = link.getAttribute("data-route");

  if (route) {
    window.history.pushState({}, "", `?view=${route}`);
    handleRoute(route);
  }
});

window.addEventListener("popstate", () => {
  const urlParams = new URLSearchParams(window.location.search);
  handleRoute(urlParams.get("view") || "home");
});

const initialParams = new URLSearchParams(window.location.search);
handleRoute(initialParams.get("view") || "home");

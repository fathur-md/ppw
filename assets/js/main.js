import { renderGlobalNavbar } from "./components/navbar.js";
import {
  getState,
  setProjects,
  setSearchQuery,
  setSortMode,
  setViewMode,
} from "./state.js";
import { renderProjects } from "./view.js";

// DOM
document.body.insertAdjacentHTML("afterbegin", renderGlobalNavbar());
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const viewBtns = document.querySelectorAll(".switcher-btn");
const activePill = document.getElementById("active-pill");
const projectRoot = document.getElementById("all-projects-container");

// EVENT
searchInput.addEventListener(
  "input",
  debounce((e) => {
    setSearchQuery(e.target.value);
    renderProjects();
  }, 500),
);

sortSelect.addEventListener("change", (e) => {
  animateCard(e.target.value, setSortMode);
});

viewBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const mode = e.currentTarget.dataset.layout;

    animateCard(mode, setViewMode);
  });
});

// FUNCTIONS
function syncViewBtns() {
  const currentMode = getState().viewMode;
  viewBtns.forEach((btn) => {
    if (btn.dataset.layout === currentMode) {
      btn.classList.remove("text-muted", "hover:text-foreground");
      btn.classList.add("text-accent");
      const btwnWidth = btn.offsetWidth;
      const btnLeft = btn.offsetLeft;

      activePill.style.width = `${btwnWidth}px`;
      activePill.style.transform = `translateX(${btnLeft}px)`;

      setTimeout(() => {
        activePill.style.transition =
          "transform 0.6s cubic-bezier(0.34, 1.3, 0.64, 1), width 0.6s cubic-bezier(0.34, 1.3, 0.64, 1)";
      }, 50);
    } else {
      btn.classList.remove("text-accent");
      btn.classList.add("text-muted", "hover:text-foreground");
    }
  });
}

function animateCard(value, action) {
  if (getState().viewMode === value || getState().sortMode === value) return;

  projectRoot.style.opacity = "0";
  projectRoot.addEventListener(
    "transitionend",
    () => {
      action(value);
      renderProjects();
      syncViewBtns();

      projectRoot.style.opacity = "1";
    },
    { once: true },
  );
}

function debounce(func, delay = 350) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

async function loadProjects() {
  try {
    const res = await fetch("./assets/js/data/projects.json");
    if (!res.ok) throw new Error("Failed to load projects");

    const data = await res.json();
    setProjects(data);
    renderProjects();
    syncViewBtns();
  } catch (error) {
    console.error(error);
  }
}

// INITIALIZE
loadProjects();

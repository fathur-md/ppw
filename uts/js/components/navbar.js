import { Icons } from "../utils/icons.js";

const BASE = location.hostname.includes("github.io") ? "/ppw/uts" : "";

export function renderNavbar() {
  const navRoot = document.getElementById("navbar");
  if (!navRoot) return;

  const currentPath = normalize(window.location.pathname);

  const navItems = [
    { name: "Beranda", path: `${BASE}/` },
    { name: "Film", path: `${BASE}/film/` },
    { name: "Serial TV", path: `${BASE}/serial-tv/` },
    { name: "Langganan", path: `${BASE}/langganan/` },
  ];

  navRoot.innerHTML = `
    <nav class="nav-wrapper" aria-label="Navigasi Utama">

      <a href="${BASE}" class="logo-link">
        Fathur<span class="logo-span">
          Stream
        </span>
      </a>

      <button
        class="menu-toggle"
        id="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
      >
        ${Icons.menu}
      </button>

      <div class="nav-menu" id="nav-menu">
        <ul>
          ${navItems
            .map(
              (item) => `
              <li>
                <a 
                  href="${item.path}"
                  class="${normalize(item.path) === currentPath ? "active" : ""}">
                  ${item.name}
                </a>
              </li>
            `,
            )
            .join("")}
        </ul>
      </div>

    </nav>
  `;

  setupMenuToggle();
  setupNavbarScroll();
}

function normalize(path) {
  return path.replace(/\/index\.html$/, "").replace(/\/$/, "");
}

function setupMenuToggle() {
  const btn = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  if (!btn || !menu) return;

  let open = false;

  const setIcon = (state) => {
    btn.innerHTML = state ? Icons.close : Icons.menu;
  };

  btn.onclick = () => {
    open = !open;

    menu.classList.toggle("show", open);
    document.body.classList.toggle("no-scroll", open);

    btn.setAttribute("aria-expanded", open);
    setIcon(open);
  };

  menu.querySelectorAll("a").forEach((link) => {
    link.onclick = () => {
      open = false;
      menu.classList.remove("show");
      document.body.classList.remove("no-scroll");
      btn.setAttribute("aria-expanded", "false");
      setIcon(false);
    };
  });
}

let navbarScrollInitialized = false;

function setupNavbarScroll() {
  if (navbarScrollInitialized) return;

  const header = document.querySelector("header");

  if (!header) return;

  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 50;

        header.classList.toggle("scrolled", isScrolled);

        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  navbarScrollInitialized = true;
}

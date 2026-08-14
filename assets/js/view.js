import { getFilteredProjects, getState } from "./state.js";

// for template literals
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

export function renderProjects() {
  const root = document.getElementById("all-projects-container");

  const mode = getState().viewMode;

  const filtered = getFilteredProjects();

  if (filtered.length === 0) {
    root.className = "";
    root.innerHTML = html`
      <div
        class="rounded-2xl py-16 bg-surface p-4 flex justify-center items-center shadow-glass-inner"
      >
        <p class="text-sm text-muted">Tidak ada proyek yang ditemukan.</p>
      </div>
    `;
    return;
  } else {
    const cards = filtered.map((p) => card(p, mode));

    root.innerHTML = cards.join("");
    if (mode === "grid") {
      root.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
    } else {
      root.className = "flex flex-col gap-5";
    }
    const renderedCards = Array.from(root.children);
    renderedCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 100}ms`;
      card.getBoundingClientRect();
      card.classList.add("transition-all", "duration-500", "ease-out");
      card.classList.remove("opacity-0", "translate-y-8");
    });
  }
}

function card(project, mode) {
  const isCompleted = project.status === "Completed";
  return html` <div
    class="bg-card-bg border border-border-glass shadow-glass-inner rounded-2xl overflow-hidden opacity-0 translate-y-8 flex flex-col ${mode === "list" ? "sm:flex-row" : ""}"
  >
    <div
      class="relative w-full h-48 shrink-0 ${mode === "grid" ? "" : "hidden"}"
    >
      <img
        src="${project.img}"
        alt="${project.title} card image"
        class="w-full h-full absolute object-cover object-center"
      />
      <span
        class="shadow-glass-inner absolute z-10 top-3 left-3 backdrop-blur-sm text-xs bg-background px-2.5 py-1 rounded-full ${isCompleted ? "text-success" : "text-warning"}"
        >${project.status}</span
      >
    </div>
    <div class="p-5 flex flex-col grow">
      <span
        class="text-xs uppercase tracking-wide mb-2 font-semibold text-accent"
        >${project.type}</span
      >
      <h3 class="font-semibold text-lg text-foreground">${project.title}</h3>
      <p
        class="text-sm text-muted mt-2 mb-4 ${mode === "grid" ? "line-clamp-1" : "line-clamp-none"}"
      >
        ${project.description || "Belum ada deskripsi."}
      </p>
      <div class="flex flex-wrap gap-2 pb-4">
        ${project.tags.map((tag) => html`<span class="bg-surface border border-border-glass px-2.5 py-1 rounded-xl text-xs text-muted">${tag}</span>`).join("")}
      </div>
      <a
        href="${project.link}"
        class="inline-block text-sm mt-auto font-semibold text-accent hover:underline"
      >
        Lihat Proyek &rarr;
      </a>
    </div>
  </div>`;
}

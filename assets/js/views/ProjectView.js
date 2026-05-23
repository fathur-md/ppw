export class ProjectView {
  constructor(id = "all-projects-container") {
    this.container = document.getElementById(id);
    this.searchInput = document.getElementById("search-input");
    this.sortSelect = document.getElementById("sort-select");
    this.layoutBtns = document.querySelectorAll("[data-layout]");

    if (!this.container) {
      console.warn(`Container with id "${id}" not found.`);
    }
  }
  render(projects, mode) {
    if (!this.container) return;

    this.restartAnimation();

    if (!projects?.length) {
      this.renderEmpty();
      return;
    }

    this.updateLayoutClass(mode);

    this.container.innerHTML = projects
      .map((project) => this.createCard(project))
      .join("");
  }

  createCard(project) {
    const cardClass = `project-card`;
    const isProgress = project.status.toLowerCase() === "on progress";
    const statusClass = isProgress ? "status-progress" : "status-completed";
    const tags = project.tags
      .map((tag) => `<span class="tag-badge">${tag}</span>`)
      .join("");

    return `
        <article class="${cardClass}">
            <div class="card-img-box">
                <img src="${project.img}" alt="${project.title}" />
                <span class="status-badge ${statusClass}">${project.status}</span>
            </div>
            <div class="card-body">
                <span class="card-type">${project.type}</span>
                <h3 class="card-title">${project.title}</h3>
                <p class="card-text">${project.description || "Tidak ada deskripsi."}</p>
                <div class="card-tags-box">${tags}</div>
                <a href="${project.link}" class="card-link-btn" target="_blank" aria-label="Buka proyek ${project.title}">
                    Buka Proyek
                </a>
            </div>
        </article>
    `;
  }

  updateLayoutClass(mode) {
    if (!this.container) return;
    this.container.classList.toggle("view-grid", mode === "grid");

    this.container.classList.toggle("view-list", mode === "list");
  }

  restartAnimation() {
    if (!this.container) return;
    this.container.classList.remove("animate-fade-in");
    void this.container.offsetWidth;
    this.container.classList.add("animate-fade-in");
  }

  renderEmpty(message = "Proyek tidak ditemukan.", error = false) {
    if (!this.container) return;
    this.container.innerHTML = `
        <div class="empty-state">
          ${
            error
              ? `<span class="error-icon">⚠️</span>`
              : `<svg xmlns="w3.org" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px; margin-bottom: var(--space-xs); color: var(--text-muted); opacity: 0.6;">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
          </svg>`
          }
          <p>${message}</p>
          ${error ? `<p class="error-text">Terjadi kesalahan saat memuat proyek.</p>` : `<span style="font-size: 13px; opacity: 0.7; margin-top: 4px;">Coba periksa kembali kata kunci.</span>`}
        </div>
    `;
  }
}

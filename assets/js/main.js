const AppStore = {
  rawProjects: [],
  currentSort: "newest",
};

const ProjectRepo = {
  async getAllProjects() {
    try {
      const response = await fetch("./assets/json/projects.json");
      if (!response.ok)
        throw new Error(`Gagal memuat file JSON: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Data Layer Error:", error);
      return null;
    }
  },
};

const ProjectService = {
  sortProjects(projects, sortBy) {
    if (!projects || projects.length === 0) return [];

    switch (sortBy) {
      case "oldest":
        return [...projects].sort(
          (a, b) => new Date(a.date) - new Date(b.date),
        );

      case "newest":
      default:
        return [...projects].sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        );
    }
  },
  searchFilterAndSort(projects, query = "", sortBy = "newest") {
    if (!projects || projects.length === 0) return [];

    let result = projects;

    if (query && query.trim() !== "") {
      const cleanQuery = query.toLowerCase().trim();
      result = projects.filter((project) => {
        const matchTitle = project.title.toLowerCase().includes(cleanQuery);
        const matchCategory = (project.category || "")
          .toLowerCase()
          .includes(cleanQuery);
        const matchTags = project.tags.some((tag) =>
          tag.toLowerCase().includes(cleanQuery),
        );
        const matchType = (project.type || "")
          .toLowerCase()
          .includes(cleanQuery);
        return matchTitle || matchCategory || matchTags || matchType;
      });
    }

    return this.sortProjects(result, sortBy);
  },
};

const ProjectUI = {
  createCardTemplate(project, isSearching = false) {
    const isProgress = project.status.toLowerCase() === "on progress";
    const statusClass = isProgress ? "status-progress" : "status-completed";
    const animationClass = isSearching
      ? "animate-search-fade"
      : "animate-fade-in";
    const cardClass = `project-card ${animationClass}`;
    const tagsHTML = project.tags
      .map((tag) => `<span class="tag-badge">${tag}</span>`)
      .join("");

    return `
      <article class="${cardClass.trim()}">
        <div class="card-img-box">
          <img src="${project.img}" alt="${project.title}" loading="lazy" />
          <span class="status-badge ${statusClass}">${project.status}</span>
        </div>
        <div class="card-body">
          <span class="card-type">${project.type}</span>
          <h3 class="card-title">${project.title}</h3>
          <p class="card-text">
            ${project.description || "Tidak ada deskripsi."}
          </p>
          <div class="card-tags-box">${tagsHTML}</div>
          <a href="${project.link}" class="card-link-btn" target="_blank" rel="noopener noreferrer" aria-label="Buka proyek ${project.title}">
            Buka Proyek
          </a>
        </div>
      </article>
    `;
  },

  renderGridSection(projects, isSearching = false) {
    const container = document.getElementById("all-projects-container");
    if (!container) return;

    if (projects.length === 0) {
      container.style.minHeight = "45vh";
      container.innerHTML = `
         <div class="empty-state">
          <svg xmlns="w3.org" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 40px; height: 40px; margin-bottom: var(--space-xs); color: var(--text-muted); opacity: 0.6;">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
          </svg>
          <p>Proyek tidak ditemukan.</p>
          <span style="font-size: 13px; opacity: 0.7; margin-top: 4px;">Coba periksa kembali kata kunci atau tag teknologi Anda.</span>
        </div>
      `;
      return;
    }

    container.style.minHeight = "auto";
    container.innerHTML = projects
      .map((p) => this.createCardTemplate(p, isSearching))
      .join("");
  },
};

const Utils = {
  debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  },
};

async function initWorkspace() {
  const data = await ProjectRepo.getAllProjects();
  if (!data) return;
  AppStore.rawProjects = data;

  const initialProjects = ProjectService.sortProjects(
    AppStore.rawProjects,
    AppStore.currentSort,
  );
  ProjectUI.renderGridSection(initialProjects);

  const btnGridView = document.getElementById("btn-grid-view");
  const btnTextView = document.getElementById("btn-text-view");
  const allProjectsContainer = document.getElementById(
    "all-projects-container",
  );

  if (btnGridView && btnTextView && allProjectsContainer) {
    const savedLayout = localStorage.getItem("projectLayout") || "view-grid";

    if (savedLayout === "view-text") {
      btnGridView.classList.remove("active");
      btnTextView.classList.add("active");
      allProjectsContainer.classList.remove("view-grid");
      allProjectsContainer.classList.add("view-text");
    } else {
      btnTextView.classList.remove("active");
      btnGridView.classList.add("active");
      allProjectsContainer.classList.remove("view-text");
      allProjectsContainer.classList.add("view-grid");
    }

    const triggerLayoutSwitch = (layoutToRemove, layoutToAdd) => {
      allProjectsContainer.classList.remove(layoutToRemove);
      allProjectsContainer.classList.add(layoutToAdd);
    };

    btnGridView.addEventListener("click", () => {
      if (btnGridView.classList.contains("active")) return;
      btnTextView.classList.remove("active");
      btnGridView.classList.add("active");
      triggerLayoutSwitch("view-text", "view-grid");

      localStorage.setItem("projectLayout", "view-grid");
    });

    btnTextView.addEventListener("click", () => {
      if (btnTextView.classList.contains("active")) return;
      btnGridView.classList.remove("active");
      btnTextView.classList.add("active");
      triggerLayoutSwitch("view-grid", "view-text");

      localStorage.setItem("projectLayout", "view-text");
    });
  }

  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");

  if (searchInput) {
    const handleSearch = Utils.debounce((e) => {
      const keyword = e.target.value;
      const filteredProjects = ProjectService.searchFilterAndSort(
        AppStore.rawProjects,
        keyword,
        AppStore.currentSort,
      );
      ProjectUI.renderGridSection(filteredProjects, true);
    }, 500);

    searchInput.addEventListener("input", handleSearch);
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppStore.currentSort = e.target.value;

      const keyword = searchInput ? searchInput.value : "";
      const processed = ProjectService.searchFilterAndSort(
        AppStore.rawProjects,
        keyword,
        AppStore.currentSort,
      );
      ProjectUI.renderGridSection(processed, true);
    });
  }
}

document.addEventListener("DOMContentLoaded", initWorkspace);

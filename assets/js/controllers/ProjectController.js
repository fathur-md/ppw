export class ProjectController {
  constructor(service, view) {
    if (!service || !view) {
      throw new Error(
        "ProjectController requires both a service and a view instance.",
      );
    }
    this.service = service;
    this.view = view;
    this.currentView = localStorage.getItem("layout") ?? "grid";
    this.currentSort = "newest";
    this.currentSearch = "";
    this.searchTimeout = null;
  }

  async init() {
    try {
      await this.service.loadProjects();

      this.renderProjects();

      this.setupSort();
      this.setupSearch();
      this.setupLayout();
      this.updateActiveLayout(this.view.layoutBtns, this.currentView);
    } catch (error) {
      console.error("Init gagal:", error.message);

      this.view.renderEmpty(
        "Gagal memuat proyek. Silakan coba lagi nanti.",
        true,
      );
    }
  }

  renderProjects() {
    const filteredProjects = this.service.searchProjects(this.currentSearch);

    const sortedProjects = this.service.sortProjects(
      this.currentSort,
      filteredProjects,
    );

    this.view.render(sortedProjects, this.currentView);
  }

  setupSort() {
    const sortSelect = this.view.sortSelect;
    if (!sortSelect) return;

    sortSelect.addEventListener("change", (e) => {
      this.currentSort = e.target.value;

      this.renderProjects();
    });
  }

  setupSearch() {
    const input = this.view.searchInput;
    if (!input) return;

    const handleSearch = (e) => {
      clearTimeout(this.searchTimeout);

      this.searchTimeout = setTimeout(() => {
        this.currentSearch = e.target.value;

        this.renderProjects();
      }, 500);
    };

    input.addEventListener("input", handleSearch);
  }

  setupLayout() {
    const layoutBtns = this.view.layoutBtns;
    if (!layoutBtns?.length) return;

    layoutBtns.forEach((button) => {
      button.addEventListener("click", () => {
        const mode = button.dataset.layout;

        if (this.currentView === mode) return;

        this.currentView = mode;
        localStorage.setItem("layout", mode);

        this.updateActiveLayout(layoutBtns, mode);

        this.renderProjects();
      });
    });
  }

  updateActiveLayout(buttons, activeMode) {
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.layout === activeMode);
    });
  }
}

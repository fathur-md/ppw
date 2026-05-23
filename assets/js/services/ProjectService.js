import { ProjectModel } from "../models/ProjectModel.js";

export class ProjectService {
  constructor(projectDataSource) {
    this.dataSource = projectDataSource;
    this.projects = [];
  }

  async loadProjects() {
    const rawData = await this.dataSource.getProjects();

    this.projects = rawData.map((item) => new ProjectModel(item));

    return this.projects;
  }

  sortProjects(mode = "newest", projects = this.projects) {
    const sorted = [...projects].sort((a, b) => {
      if (mode === "newest") {
        return b.createdAt - a.createdAt;
      }
      return a.createdAt - b.createdAt;
    });

    return sorted;
  }

  searchProjects(query = "", projects = this.projects) {
    const normalizeQuery = String(query || "")
      .trim()
      .toLowerCase();

    if (!normalizeQuery) return projects;

    const filtered = projects.filter((project) => {
      return (
        String(project.title || "")
          .toLowerCase()
          .includes(normalizeQuery) ||
        String(project.category || "")
          .toLowerCase()
          .includes(normalizeQuery) ||
        String(project.type || "")
          .toLowerCase()
          .includes(normalizeQuery)
      );
    });

    return filtered;
  }
}

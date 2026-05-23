export class ProjectDataSource {
  async getProjects() {
    const url = new URL("../data/projects.json", import.meta.url).href;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch projects: ${res.status} ${res.statusText}`,
      );
    }
    return await res.json();
  }
}

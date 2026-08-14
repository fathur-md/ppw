let _state = {
  projects: [],
  searchQuery: "",
  sortMode: "newest",
  viewMode: localStorage.getItem("viewMode") || "grid",
};

// Basic readable
export function getState() {
  return _state;
}

export function getFilteredProjects() {
  const q = _state.searchQuery.toLowerCase();

  const filteredProjects = _state.projects.filter((p) => {
    const type = p.type ? p.type.toLowerCase() : "";
    const title = p.title ? p.title.toLowerCase() : "";
    const desc = p.description ? p.description.toLowerCase() : "";
    const tags = p.tags || [];

    return (
      type.includes(q) ||
      title.includes(q) ||
      desc.includes(q) ||
      tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  if (_state.sortMode === "newest") {
    filteredProjects.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  } else {
    filteredProjects.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    );
  }
  return filteredProjects;
}

export function setProjects(data) {
  _state.projects = data;
}

export function setSearchQuery(query) {
  _state.searchQuery = query;
}

export function setSortMode(mode) {
  _state.sortMode = mode;
}

export function setViewMode(mode) {
  _state.viewMode = mode;
  localStorage.setItem("viewMode", mode);
}

/*
Advanced but not readable
For documentation purposes only
*/

export function setUpdate(key, value) {
  if (Object.hasOwn(_state, key)) {
    _state[key] = value;
  } else {
    console.warn(`Key "${key}" does not exist in state`);
  }
}

export function _getFilteredProjects() {
  const q = _state.searchQuery.toLowerCase();
  const keys = ["type", "title", "description", "tags"];

  const filteredArray = _state.projects.filter((p) => {
    return keys.some((k) => {
      const value = p[k];
      if (!value) return false;
      if (Array.isArray(value)) {
        return value.some((tag) => tag.toLowerCase().includes(q));
      }
      return value.toLowerCase().includes(q);
    });
  });

  return filteredArray.sort((a, b) => {
    const timeA = new Date(a.createdAt).getTime();
    const timeB = new Date(b.createdAt).getTime();

    if (_state.sortMode === "newest") {
      return timeB - timeA;
    } else {
      return timeA - timeB;
    }
  });
}

const loadProjects = async () => {
  const gridDiv = document.getElementById("projects-grid");
  const latestDiv = document.getElementById("latest-projects");

  try {
    const res = await fetch("./projects.json");
    if (!res.ok) throw new Error("Data tidak ditemukan");

    const data = await res.json();

    const latest = data.at(-1);
    if (latest && latestDiv) {
      latestDiv.innerHTML = `
            <div class="latest-card">
              <img src="${latest.img}" alt="${latest.title}" />
              <div class="latest-detail">
                <h2>${latest.title}</h2>
                <p>${latest.description}</p>
                <a href="${latest.link}" target="_blank" class="btn-blue">Lihat Proyek</a>
              </div>
            </div>
        `;
    }

    const gridItems = data.slice(0, -1);
    if (gridDiv) {
      gridDiv.innerHTML = gridItems
        .reverse()
        .map((p) => {
          const statusClass =
            p.status.toLowerCase() === "in progress" ? "in-progress" : "";

          return `
                <a href="${p.link}" target="_blank" class="card">
                  <img src="${p.img}" alt="${p.title}" />
                  <div class="card-detail">
                    <div class="card-top">
                      <span class="status-badge ${statusClass}">${p.status}</span>
                    </div>
                    <div class="card-bottom">
                      <span class="type">${p.type}</span>
                      <h3>${p.title}</h3>
                    </div>
                  </div>
                </a>
            `;
        })
        .join(" ");
    }
  } catch (err) {
    console.error(err);
  }
};

document.addEventListener("DOMContentLoaded", loadProjects);

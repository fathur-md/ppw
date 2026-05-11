import { renderNavbar } from "./components/navbar.js";
import { getTopHeadlines } from "./services/api.js";

async function init() {
  renderNavbar("home");

  await renderHomeNews();
}
async function renderHomeNews() {
  const container = document.getElementById("news");
  if (!container) return;

  try {
    const news = await getTopHeadlines("technology");

    container.innerHTML = news
      .map(
        (item) => `
      <div class="card">
        <img src="${item.urlToImage || ""}" alt="">
        <div class="card-body">
          <h3>${item.title}</h3>
          <p>${item.description || ""}</p>
        </div>
      </div>
    `,
      )
      .join("");
  } catch (err) {
    container.innerHTML = `<p>Gagal memuat berita</p>`;
    console.error(err);
  }
}
init();

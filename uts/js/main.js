import { renderNavbar } from "./components/navbar.js";
import { getNews } from "./services/api.js";

async function init() {
  renderNavbar("home");

  await renderHomeNews();
}
async function renderHomeNews() {
  const container = document.getElementById("news");
  if (!container) return;

  try {
    const news = await getNews("general");

    container.innerHTML = news
      .map(
        (item) => `
     <a href="${item.url}" target="_blank">
        <div class="card">
          <img src="${item.image || ""}" alt="">
          <div class="card-body">
            <h3>${item.title}</h3>
            <p>${item.text || ""}</p>
          </div>
        </div>
      </a>
    `,
      )
      .join("");
  } catch (err) {
    container.innerHTML = `<p>Gagal memuat berita</p>`;
    console.error(err);
  }
}
init();

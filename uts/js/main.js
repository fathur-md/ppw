import { renderNavbar } from "./components/navbar.js";
import { getNews } from "./services/news.js";

async function init() {
  renderNavbar();

  await renderHeadline();
  await renderHomeNews();
}

async function renderHeadline() {
  const container = document.getElementById("headline");
  if (!container) return;

  try {
    const news = await getNews();
    container.innerHTML = news
      .slice(0, 3)
      .map(
        (item, index) => `
      <div class="trending-item">
        <span class="trending-number">${index + 1}</span>
        <div class="trending-content" onclick="window.open('${item.url}', '_black');">
          <h3>${item.title}</h3>
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
async function renderHomeNews() {
  const container = document.getElementById("news-grid");
  if (!container) return;

  try {
    const news = await getNews();

    container.innerHTML = news
      .map(
        (item) => `

        <article class="news-card" onclick="window.open('${item.url}', '_black');">
          <div class="card-img">
            <img src="${item.image || ""}" alt="">
          </div>
          <span class="category-text">${item.category}</span>
          <h4>${item.title}</h4>
          <p>${item.text || ""}</p>
        </article>

    `,
      )
      .join("");
  } catch (err) {
    container.innerHTML = `<p>Gagal memuat berita</p>`;
    console.error(err);
  }
}

init();

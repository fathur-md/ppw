async function loadMockNews() {
  const res = await fetch("../uts-frontend/js/utils/news.json");

  if (!res.ok) {
    throw new Error(`Gagal memuat mock news: ${res.status}`);
  }

  return res.json();
}

export async function getNews(query = "") {
  const data = await loadMockNews();
  const allNews = data.news || [];

  if (!query) {
    return allNews;
  }

  const normalizedQuery = query.toLowerCase();

  return allNews.filter((item) => {
    const title = (item.title || "").toLowerCase();
    const category = (item.category || "").toLowerCase();
    return (
      title.includes(normalizedQuery) || category.includes(normalizedQuery)
    );
  });
}

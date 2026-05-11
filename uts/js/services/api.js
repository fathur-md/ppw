import { CONFIG } from "../config.js";

async function loadMock() {
  const res = await fetch("../js/utils/news.json");
  return await res.json();
}

export async function getNews(query = CONFIG.DEFAULT_QUERY) {
  try {
    const url = `${CONFIG.API_URL}?text=${encodeURIComponent(query)}&language=${CONFIG.LANGUAGE}&api-key=${CONFIG.API_KEY}`;

    const res = await fetch(url);

    if (res.status === 402) {
      throw new Error(
        "API quota exceeded or payment required. Please check your subscription.",
      );
    }

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    const result = data.news || [];

    return result;
  } catch (error) {
    console.warn("API error fallback mock:", error);
    const mock = await loadMock();
    return mock.news;
  }
}

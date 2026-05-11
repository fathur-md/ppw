import { CONFIG } from "../config.js";
import { getCache, setCache } from "../utils/cache.js";

async function loadMock() {
  const res = await fetch("../js/utils/news.json");
  return await res.json();
}

export async function getNews(query = CONFIG.DEFAULT_QUERY) {
  const cacheKey = `news-${query}`;

  const cached = getCache(cacheKey);
  if (cached) return cached;

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
    setCache(cacheKey, result);

    return result;
  } catch (error) {
    console.warn("API error fallback mock:", error);
    const mock = await loadMock();
    setCache(cacheKey, mock.news || []);
    return mock.news;
  }
}

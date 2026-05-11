import { CONFIG } from "../config.js";

export async function getNews(query = CONFIG.DEFAULT_QUERY) {
  const url = `${CONFIG.API_URL}?text=${encodeURIComponent(query)}&language=${CONFIG.LANGUAGE}&api-key=${CONFIG.API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();

  return data.news || data.articles || [];
}

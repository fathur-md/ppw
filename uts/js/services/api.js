import { CONFIG } from "../config.js";

export async function getTopHeadlines(category = CONFIG.DEFAULT_CATEGORY) {
  const url = `${CONFIG.API_URL}/top-headlines?country=${CONFIG.COUNTRY}&apiKey=${CONFIG.API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

  const data = await res.json();

  return data.articles || [];
}

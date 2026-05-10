import { CONFIG } from "../config.js";

async function request(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
}

export async function fetchData(type = "movie", category = "popular") {
  try {
    const data = await request(
      `${CONFIG.BASE_URL}?type=${type}&category=${category}`,
    );

    return data.results || [];
  } catch (error) {
    console.error(`Error fetching data (${type}):`, error);
    return [];
  }
}

export async function fetchVideoId(id, type = "movie") {
  try {
    const data = await request(
      `${CONFIG.BASE_URL}?type=${type}&category=videos&id=${id}`,
    );

    const trailer =
      data.results?.find(
        (v) =>
          v.site === "YouTube" && (v.type === "Trailer" || v.type === "Teaser"),
      ) || data.results?.find((v) => v.site === "YouTube");

    return trailer?.key || null;
  } catch (err) {
    console.error("fetchVideoId error:", err);
    return null;
  }
}

import { CONFIG } from "../config.js";

async function request(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
}

export async function fetchData(type = "trending") {
  try {
    const data = await request(`${CONFIG.BASE_URL}?type=${type}`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching data (${type}):`, error);
    return [];
  }
}

export async function fetchVideoId(id, type = "movie") {
  try {
    const data = await request(
      `${CONFIG.BASE_URL}/video?id=${id}&type=${type}`,
    );

    const trailer = data.results?.find(
      (v) => v.type === "Trailer" && v.site === "YouTube",
    );

    return trailer?.key || null;
  } catch (err) {
    console.error("fetchVideoId error:", err);
    return null;
  }
}

import { renderHero } from "./components/hero.js";
import { fetchData, fetchVideoId } from "./services/api.js";

async function init() {
  console.log("test init");

  const movies = await fetchData("movie", "popular");

  if (!movies.length) return;

  const random = movies[Math.floor(Math.random() * movies.length)];
  const videoId = await fetchVideoId(random.id, "movie");

  random.trailerKey = videoId;

  renderHero(random);
}

init();

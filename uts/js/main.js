import { renderHero } from "./components/hero.js";
import { fetchData, fetchVideoId } from "./services/api.js";

async function init() {
  console.log("test init");

  const trending = await fetchData("trending");

  if (!trending.length) return;

  const random = trending[Math.floor(Math.random() * trending.length)];
  const videoId = await fetchVideoId(random.id, random.media_type || "movie");

  random.trailerKey = videoId;
  renderHero(random);
}

init();

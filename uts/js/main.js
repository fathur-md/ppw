import { renderHero } from "./components/hero.js";
import { fetchData, fetchVideoId } from "./services/api.js";

// hapus nanti
// function debugToScreen(text) {
//   let box = document.getElementById("debug-box");

//   if (!box) {
//     box = document.createElement("div");
//     box.id = "debug-box";

//     box.style.position = "fixed";
//     box.style.bottom = "10px";
//     box.style.left = "10px";
//     box.style.zIndex = "99999";
//     box.style.background = "rgba(0,0,0,0.8)";
//     box.style.color = "white";
//     box.style.padding = "10px";
//     box.style.fontSize = "12px";
//     box.style.borderRadius = "8px";
//     box.style.maxWidth = "90%";

//     document.body.appendChild(box);
//   }

//   box.innerHTML += `<div>${text}</div>`;
// }

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

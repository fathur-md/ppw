import { Icons } from "../utils/icons.js";
import { playerTrailer } from "./trailerPlayer.js";

export function renderHero(movie) {
  const hero = document.getElementById("hero");
  if (!hero || !movie) return;

  hero.innerHTML = "";

  const wrapper = document.createElement("div");
  const imgWrapper = document.createElement("div");
  const overlayTop = document.createElement("div");
  const overlayBottom = document.createElement("div");
  const img = document.createElement("img");
  const content = document.createElement("div");

  const brand = document.createElement("h1");
  const title = document.createElement("h2");
  const desc = document.createElement("p");

  const btnWrapper = document.createElement("div");
  const btnPlay = document.createElement("button");
  const btnInfo = document.createElement("button");

  wrapper.className = "hero-wrapper";
  imgWrapper.className = "img-wrapper";
  overlayTop.className = "overlay-top";
  overlayBottom.className = "overlay-bottom";
  img.className = "hero-backdrop";
  content.className = "hero-content";

  brand.className = "hero-brand";
  title.className = "hero-title";
  desc.className = "hero-description";

  btnWrapper.className = "btn-wrapper";
  btnPlay.className = "btn-play";
  btnInfo.className = "btn-info";

  img.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  brand.textContent = "Fathur Stream Original";
  title.textContent = movie.title || movie.name;
  desc.textContent =
    movie.overview ||
    "Nikmati trailer film dan serial populer dengan pengalaman streaming modern, cepat, dan cinematic.";

  desc.onclick = () => {
    desc.classList.toggle("click");
  };

  btnPlay.innerHTML = `
    ${Icons.play}
    <span>Nonton Sekarang</span>
  `;

  btnInfo.innerHTML = `
    ${Icons.info}
    <span>Detail</span>
  `;

  btnPlay.onclick = () => {
    playerTrailer(movie.trailerKey, movie.title || movie.name);
  };

  btnInfo.onclick = () => {
    console.log("btn info clicked");
  };

  btnWrapper.append(btnPlay, btnInfo);
  content.append(brand, title, desc, btnWrapper);
  imgWrapper.appendChild(img);
  wrapper.append(imgWrapper, content, overlayTop, overlayBottom);
  hero.append(wrapper);
}

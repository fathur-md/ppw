// 1. Fungsi Utama: Mengambil data dari API Netlify
async function fetchMovies() {
  const grid = document.getElementById("movie-grid");

  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const BASE_URL = isLocal
    ? "http://localhost:8888"
    : "https://nama-proyek-netlify-kamu.netlify.app";

  const ENDPOINT = "/.netlify/functions/movie";

  try {
    const response = await fetch(BASE_URL + ENDPOINT);
    if (!response.ok) throw new Error("Gagal fetch data");

    const data = await response.json();

    // Panggil fungsi render dan kirim datanya ke sana
    renderMovies(data.results);
  } catch (error) {
    console.error("Error:", error);
    grid.innerHTML = `<div class="loader">Gagal memuat film.</div>`;
  }
}

// 2. Fungsi Pendukung: Menampilkan data ke HTML menggunakan Template
function renderMovies(movies) {
  const container = document.getElementById("movie-grid");
  const template = document.getElementById("movie-template");

  container.innerHTML = ""; // Bersihkan loader sebelum mengisi data

  movies.forEach((movie) => {
    // Kloning struktur dari template
    const clone = template.content.cloneNode(true);

    // Isi data ke elemen di dalam kloningan
    const img = clone.querySelector(".movie-poster");
    img.src = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Image";
    img.alt = movie.title;

    clone.querySelector(".movie-title").textContent = movie.title;
    clone.querySelector(".rating").textContent =
      `⭐ ${movie.vote_average.toFixed(1)}`;

    const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";
    clone.querySelector(".year").textContent = year;

    // Masukkan ke dalam container utama
    container.appendChild(clone);
  });
}

// Jalankan fungsi pengambil data saat script dimuat
fetchMovies();

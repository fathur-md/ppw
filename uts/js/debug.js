async function testKoneksi() {
  const grid = document.getElementById("movie-grid");
  grid.innerHTML = "Sedang mencoba koneksi...";

  try {
    // Coba tembak endpoint lokal atau online kamu
    const response = await fetch(
      "http://localhost:8888/.netlify/functions/movie",
    );
    const data = await response.json();

    console.log("Data diterima:", data);

    if (data.results) {
      grid.innerHTML = `✅ Berhasil! Ditemukan ${data.results.length} film. Cek Console (F12).`;
    } else {
      grid.innerHTML = "❌ Data diterima tapi formatnya salah.";
    }
  } catch (error) {
    console.error("Error debug.js:", error);
    grid.innerHTML =
      "❌ Gagal koneksi! Pastikan 'netlify dev' sudah jalan di terminal.";
  }
}

testKoneksi();

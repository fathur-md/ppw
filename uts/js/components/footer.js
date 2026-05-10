const BASE_PATH = window.location.pathname.includes("/uts") ? "/uts" : "";

export function renderFooter() {
  return `
    <div class="footer">

      <div class="footer-container">

        <div class="footer-top">

          <div class="footer-brand">

            <a href="${BASE_PATH}/" class="footer-logo">
              Fathur<span>Stream</span>
            </a>

            <p class="footer-desc">
              Nikmati trailer film dan serial populer
              dengan pengalaman streaming modern,
              cepat, dan cinematic.
            </p>

          </div>

          <div class="footer-links">

            <div class="footer-column">

              <h3 class="footer-title">Navigasi</h3>

              <a href="${BASE_PATH}/">Beranda</a>
              <a href="${BASE_PATH}/film/">Film</a>
              <a href="${BASE_PATH}/serial-tv/">Serial TV</a>

            </div>

            <div class="footer-column">

              <h3 class="footer-title">Informasi</h3>

              <a href="#">Tentang</a>
              <a href="${BASE_PATH}/langganan/">Paket Premium</a>
              <a href="#">Kontak</a>

            </div>

          </div>

        </div>

        <div class="footer-bottom">

          <p class="footer-copy">
            © 2026 FathurStream. All rights reserved.
          </p>

          <p class="footer-note">
            Indonesia
          </p>

        </div>

      </div>

    </div>
  `;
}

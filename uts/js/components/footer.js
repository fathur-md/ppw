export function renderFooter() {
  const currentPath = window.location.pathname;

  const isSubFolder =
    currentPath.includes("/film/") ||
    currentPath.includes("/serial-tv/") ||
    currentPath.includes("/langganan/");

  const base = isSubFolder ? "../" : "./";

  return `
    <div class="footer">

      <div class="footer-container">

        <div class="footer-top">

          <div class="footer-brand">

            <a
              href="${base}"
              class="footer-logo"
            >
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

              <h3 class="footer-title">
                Navigasi
              </h3>

              <a href="${base}">
                Beranda
              </a>

              <a href="${base}film/">
                Film
              </a>

              <a href="${base}serial-tv/">
                Serial TV
              </a>

            </div>

            <div class="footer-column">

              <h3 class="footer-title">
                Informasi
              </h3>

              <a href="${base}tentang/">
                Tentang
              </a>

              <a href="${base}langganan/">
                Paket Premium
              </a>

              <a href="${base}kontak/">
                Kontak
              </a>

            </div>

          </div>

        </div>

        <div class="footer-bottom">

          <p class="footer-copy">
            © 2026 FathurStream.
            All rights reserved.
          </p>

          <p class="footer-note">
            Indonesia
          </p>

        </div>

      </div>

    </div>
  `;
}

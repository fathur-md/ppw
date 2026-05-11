export function renderNavbar() {
  const nav = document.getElementById("navbar");

  nav.innerHTML = `
    <div class="container">
      <div class="nav-content">
        <div class="nav-left">
            <a href="index.html" class="logo">
              Fathur<span>NEWS</span>
            </a>

            <div class="nav-links">
              <a href="index.html">Beranda</a>
              <a href="about.html">Redaksi</a>
              <a href="services.html">Berlangganan</a>
            </div>
          </div>

          <a href="services.html" class="btn-pro">
            AKSES PRO
          </a>
      </div>
    </div>
  `;
}

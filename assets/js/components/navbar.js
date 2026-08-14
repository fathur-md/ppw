const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

export function renderGlobalNavbar(basePath = "./") {
  return html`
    <div
      class="sticky top-0 z-50 bg-card-bg backdrop-blur-md md:shadow-glass-inner"
    >
      <div
        class="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between"
      >
        <div class="flex items-center gap-3 w-full">
          <img
            src="${basePath}assets/img/profile.png"
            alt="profile"
            class="block sm:hidden w-10 h-10 rounded-full object-top object-cover ring-2 ring-border-glass shrink-0"
          />
          <div class="flex flex-col sm:flex-row sm:justify-between w-full">
            <a
              href="${basePath}"
              class="text-sm font-bold text-foreground/70 hover:text-accent transition-colors"
            >
              Fathurrahman Muhammad.
            </a>
            <span class="text-sm text-muted">241110109 • Informatika 12D</span>
          </div>
        </div>
      </div>
    </header>
  `;
}

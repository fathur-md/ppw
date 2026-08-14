import { html } from "../utils.js";

export function renderHomePage() {
  return html`
    <section
      class="flex flex-col justify-center items-center text-center animate-fade-in py-12 relative isolate"
    >
      <p class="text-muted text-xl font-mono font-semibold tracking-wide">
        &gt; Hello, World.
      </p>
      <h1
        class="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-foreground via-foreground/70 to-foreground/50"
      >
        Fathurrahman.
      </h1>
      <h2 class="text-[clamp(1.5rem,3vw,2rem)] text-muted font-medium">
        Just an Informatic Student.
      </h2>
      <p class="mt-6 text-muted max-w-xl mx-auto text-lg">
        Building realities out of logic, turning coffee into clean code, and
        debugging the universe one line at a time.
      </p>
      <div class="flex flex-col sm:flex-row items-center gap-4 mt-10">
        <a
          href="#"
          data-route="projects"
          class="nav-btn px-6 py-3 text-sm bg-foreground text-background font-semibold rounded-full shadow-glass-inner hover:scale-105 transition-transform"
        >
          Explore Projects
        </a>
        <a
          href="#"
          data-route="about"
          class="nav-btn px-6 py-3 text-sm bg-surface border border-border-glass text-foreground font-semibold rounded-full shadow-glass-inner hover:bg-white/5 transition-colors"
        >
          About Me <span>&rarr;</span></a
        >
      </div>
    </section>
  `;
}

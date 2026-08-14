import { html } from "../utils.js";

export function renderAboutPage() {
  return html`
    <div class="animate-fade-in flex flex-col py-8 w-full">
      <header class="flex flex-col md:flex-row md:gap-6 md:items-center">
        <div class="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 my-auto">
          <img
            src="../../assets/img/gambar3.png"
            alt="Muhammad Fathurrahman"
            class="w-full h-full rounded-full object-cover shadow-glass-inner border border-border-glass object-top"
          />
          <div
            class="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-success rounded-full border-2 border-background shadow-sm"
          ></div>
        </div>
        <h1
          class="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-4xl"
        >
          Curating code,<br />
          <span
            class="text-transparent bg-clip-text bg-linear-to-r from-accent via-success to-warning"
            >designing impact.</span
          >
        </h1>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mt-16">
        <section class="lg:col-span-2 flex flex-col gap-12">
          <div
            class="text-lg sm:text-xl text-muted leading-relaxed flex flex-col gap-6"
          >
            <p>
              Hi, I'm
              <strong class="text-foreground font-semibold"
                >Muhammad Fathurrahman</strong
              >. I'm a full-stack developer and Informatics student dedicated to
              exploring the vast landscape of digital innovation.
            </p>
            <p>
              I specialize in building interactive, scalable, and modern web
              applications that bridge the gap between complex technical
              functionality and clean visual design.
            </p>
            <p>
              I believe the best technology is "invisible"—solutions that work
              seamlessly behind the scenes to provide an exceptional user
              experience through AI integration and modern engineering.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              class="p-6 bg-surface border border-border-glass rounded-2xl shadow-glass-inner flex flex-col hover:-translate-y-1 transition-transform"
            >
              <h4 class="text-foreground font-bold text-lg mb-1">
                Active Learner
              </h4>
              <p class="text-muted text-sm">Informatics</p>
            </div>
            <div
              class="p-6 bg-surface border border-border-glass rounded-2xl shadow-glass-inner flex flex-col hover:-translate-y-1 transition-transform"
            >
              <h4 class="text-foreground font-bold text-lg mb-1">Full-Stack</h4>
              <p class="text-muted text-sm">Development</p>
            </div>
            <div
              class="p-6 bg-surface border border-border-glass rounded-2xl shadow-glass-inner flex flex-col hover:-translate-y-1 transition-transform"
            >
              <h4 class="text-foreground font-bold text-lg mb-1">Clean Code</h4>
              <p class="text-muted text-sm">Mindset</p>
            </div>
          </div>
        </section>

        <aside class="lg:col-span-1">
          <div
            class="p-8 bg-surface border border-border-glass rounded-3xl shadow-glass-inner flex flex-col sticky top-28"
          >
            <span
              class="text-xs font-bold uppercase tracking-wider text-muted mb-6"
              >The Journey</span
            >

            <div class="mb-8">
              <h3 class="text-foreground font-bold text-lg">
                B.S. in Informatics
              </h3>
              <span class="text-accent text-sm font-medium"
                >2024 - Present</span
              >
              <p class="text-muted text-sm mt-2 leading-relaxed">
                Specializing in modern software development and scalable data
                systems.
              </p>
            </div>

            <div class="mb-10">
              <h3 class="text-foreground font-bold text-lg">
                Academic Foundations
              </h3>
              <span class="text-accent text-sm font-medium"
                >General Education</span
              >
              <p class="text-muted text-sm mt-2 leading-relaxed">
                Strong background in logic, mathematics, and critical problem
                solving.
              </p>
            </div>

            <span
              class="text-xs font-bold uppercase tracking-wider text-muted mb-6"
              >Design Philosophy</span
            >
            <ul class="flex flex-col gap-4">
              <li
                class="flex items-center gap-3 text-sm font-medium text-foreground"
              >
                <div class="w-2 h-2 rounded-full bg-accent"></div>
                Clean & Minimal Interfaces
              </li>
              <li
                class="flex items-center gap-3 text-sm font-medium text-foreground"
              >
                <div class="w-2 h-2 rounded-full bg-warning"></div>
                Performance First Mentality
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  `;
}

import { html } from "../utils.js";
import { featuredProjects } from "../data.js";

export function renderProjectsPage() {
  return html`
    <div class="animate-fade-in flex flex-col gap-16 py-8">
      <section id="tech-specs">
        <h2
          class="text-4xl sm:text-5xl font-bold mb-8 text-foreground tracking-tight text-center"
        >
          Tech Specs.
        </h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-12 border-t pt-6 border-surface"
        >
          <div>
            <h3 class="text-xl font-semibold mb-6 text-foreground">
              Engineered with
            </h3>
            <div class="flex flex-wrap gap-3">
              <span
                class="px-4 py-2 bg-surface border border-border-glass rounded-full text-sm font-medium"
                >HTML5 / CSS3</span
              >
              <span
                class="px-4 py-2 bg-surface border border-border-glass rounded-full text-sm font-medium"
                >JavaScript</span
              >
              <span
                class="px-4 py-2 bg-surface border border-border-glass rounded-full text-sm font-medium"
                >React.js</span
              >
              <span
                class="px-4 py-2 bg-surface border border-border-glass rounded-full text-sm font-medium"
                >PHP</span
              >
              <span
                class="px-4 py-2 bg-surface border border-border-glass rounded-full text-sm font-medium"
                >MySQL</span
              >
              <span
                class="px-4 py-2 bg-surface border border-border-glass rounded-full text-sm font-medium"
                >Figma</span
              >
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-6 text-foreground">Projects</h3>
            <ul class="flex flex-col gap-6">
              ${featuredProjects
                .map(
                  (project) => html`
                    <li
                      class="flex flex-col border-b border-border-glass/50 pb-4 last:border-0"
                    >
                      <h4 class="text-lg font-bold text-foreground mb-1">
                        ${project.title}
                      </h4>
                      <p class="text-muted text-sm leading-relaxed">
                        ${project.description}
                      </p>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </div>
        </div>
      </section>

      <section id="gallery">
        <h2
          class="text-4xl sm:text-5xl font-bold mb-8 text-foreground tracking-tight"
        >
          Design in motion.
        </h2>
        <div class="w-full overflow-x-auto pb-8 hide-scrollbar">
          <div class="flex gap-6 w-max">
            ${featuredProjects
              .map(
                (project) => html`
                  <a
                    href="${project.demoUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex flex-col w-75 sm:w-100 shrink-0"
                  >
                    <div
                      class="h-50 sm:h-65 rounded-2xl overflow-hidden bg-surface border border-border-glass shadow-glass-inner mb-4 relative"
                    >
                      <img
                        src="${project.imageUrl}"
                        alt="${project.title}"
                        class="w-full h-full object-cover object-top-left opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div
                        class="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors"
                      ></div>
                    </div>
                    <div
                      class="text-sm font-medium text-muted group-hover:text-accent transition-colors px-2"
                    >
                      ${project.title} Engine ↗
                    </div>
                  </a>
                `,
              )
              .join("")}
            <a
              href="https://github.com/fathur-md"
              target="_blank"
              class="group flex flex-col w-75 sm:w-100 shrink-0"
            >
              <div
                class="h-50 sm:h-65 rounded-2xl overflow-hidden bg-surface flex items-center justify-center border border-border-glass shadow-glass-inner mb-4 group-hover:bg-white/5 transition-colors"
              >
                <img
                  src="../../assets/img/github.png"
                  alt="GitHub"
                  class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div
                class="text-sm font-medium text-muted group-hover:text-foreground transition-colors px-2"
              >
                View more on GitHub ↗
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

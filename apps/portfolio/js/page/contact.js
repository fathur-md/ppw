import { html } from "../utils.js";

export function renderContactPage() {
  return html`
    <section class="flex flex-col w-full py-8 max-w-2xl mx-auto">
      <h2
        class="text-4xl text-center sm:text-5xl font-bold tracking-tight text-foreground mb-4 leading-13"
      >
        Let&apos;s build <br />
        <span
          class="text-transparent bg-clip-text bg-linear-to-r from-accent to-success"
          >the future together.</span
        >
      </h2>
      <p class="text-center text-muted text-xl">
        Available for freelance opportunities and innovative collaborations.
      </p>
      <form
        action="#"
        class="flex flex-col gap-5 w-full p-6 sm:p-8 bg-surface border border-border-glass rounded-3xl shadow-glass-inner mt-8"
      >
        <input
          type="text"
          name="name"
          class="w-full bg-background border border-border-glass rounded-xl px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          class="w-full bg-background border border-border-glass rounded-xl px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          class="w-full bg-background border border-border-glass rounded-xl px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none h-32"
          placeholder="Your Message"
          required
        ></textarea>
        <button
          class="w-full p-3 mt-2 bg-foreground text-background font-semibold rounded-xl shadow-glass-inner hover:scale-[1.02] hover:bg-accent transition-all duration-300"
        >
          Send Message
        </button>
      </form>
      <div class="flex items-center gap-8 mt-10">
        <a
          href="https://github.com/fathur-md"
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted hover:text-foreground transition-colors font-medium flex items-center gap-2"
          >GitHub</a
        >
        <a
          href="mailto:241110109@mahasiswa.mercubuana-yogya.ac.id"
          class="text-muted hover:text-accent transition-colors font-medium flex items-center gap-2"
          >Email Directly</a
        >
      </div>
    </section>
  `;
}

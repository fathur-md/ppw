const CONFIG = {
  IS_LOCAL:
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1",

  get BASE_URL() {
    return this.IS_LOCAL
      ? "http://localhost:8888"
      : "https://fathur-stream-backend.netlify.app";
  },

  ENDPOINTS: {
    POPULAR: "/.netlify/functions/movie",
    // TODO: Add more endpoints if needed
  },

  SELECTORS: {
    grid: document.getElementById("movie-grid"),
    template: document.getElementById("movie-template"),
  },
};

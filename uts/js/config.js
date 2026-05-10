const hostname = window.location.hostname;
const port = window.location.port;

const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";

const isHotspot = hostname.startsWith("172.20.10.");

const isDevServer = isLocalhost && (port === "5500" || port === "8888");

export const CONFIG = {
  IMG_URL: "https://image.tmdb.org/t/p/",

  BASE_URL:
    isLocalhost || isHotspot || isDevServer
      ? "http://172.20.10.2:8888/.netlify/functions/api"
      : "https://fathur-stream-backend.netlify.app/.netlify/functions/api",
};

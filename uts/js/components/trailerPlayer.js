import { Icons } from "../utils/icons.js";

export function playerTrailer(videoId, title = "") {
  if (!videoId) return;

  const old = document.getElementById("trailer-player");
  if (old) old.remove();

  const overlay = document.createElement("div");
  overlay.id = "trailer-player";
  overlay.className = "trailer-overlay";

  overlay.innerHTML = `
    <div class="trailer-container">

        <div class="trailer-loader">Loading...</div>


        <div class="btn-wrapper">
            <button
                class="trailer-mute"
                id="trailer-mute"
                >
                ${Icons.mute}
            </button>

            <button 
                class="trailer-close" 
                id="trailer-close"
                >
                ${Icons.close}
            </button>  
        </div>

        

        <iframe 
             src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&disablekb=1&enablejsapi=1&fs=0"
            allow="autoplay; fullscreen"
            >
        </iframe>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add("no-scroll");

  const iframe = overlay.querySelector("iframe");

  iframe.onload = () => {
    const loader = overlay.querySelector(".trailer-loader");
    if (loader) loader.remove();
  };

  const close = document.getElementById("trailer-close");

  function closeTrailer() {
    overlay.remove();
    document.body.classList.remove("no-scroll");
  }

  close.onclick = closeTrailer;

  overlay.onclick = (e) => {
    if (e.target === overlay) closeTrailer();
  };

  let isMuted = true;
  const muteBtn = document.getElementById("trailer-mute");

  function sendCommand(func) {
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func,
        args: [],
      }),
      "*",
    );
  }

  muteBtn.onclick = () => {
    isMuted = !isMuted;

    if (isMuted) {
      sendCommand("mute");
      muteBtn.innerHTML = Icons.mute;
      muteBtn.classList.remove("mute-show");
    } else {
      sendCommand("unMute");
      muteBtn.innerHTML = Icons.unmute;
      muteBtn.classList.add("mute-show");

      console.log("unmute");
    }
  };
}

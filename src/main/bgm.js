const VOLUME = 0.15;
const playlist = [
    new URL("../../assets/audio/duet.mp3", import.meta.url).href,
    new URL("../../assets/audio/omori.mp3", import.meta.url).href,
    new URL("../../assets/audio/shapes.mp3", import.meta.url).href,
    new URL("../../assets/audio/health.mp3", import.meta.url).href,
    new URL("../../assets/audio/tomorrow.mp3", import.meta.url).href,
];
const trackNames = [
    "OMORI — Duet (172)",
    "OMORI — OMORI (168)",
    "OMORI — Finding Shapes in the Clouds (043)",
    "OMORI — Good for Health, Bad for Imagination (029)",
    "OMORI — See You Tomorrow (061)",
];
export function initBgm() {
    const savedIdx = sessionStorage.getItem("bgm_curr_idx");
    const savedTime = sessionStorage.getItem("bgm_timestamp");
    const isPlayingState = sessionStorage.getItem("bgm_is_playing") === "true";
    let currIdx = savedIdx
        ? parseInt(savedIdx, 10)
        : Math.floor(Math.random() * playlist.length);
    const bgm = new Audio(playlist[currIdx]);
    bgm.preload = "auto";
    bgm.volume = VOLUME;
    bgm.addEventListener("error", () => {
        console.error(`[Error] Could not load audio: ${bgm.src} (media error code: ${bgm.error?.code ?? "unknown"})`);
    });
    if (savedTime) {
        bgm.currentTime = parseFloat(savedTime);
    }
    const disc = document.querySelector("#disc");
    const nowPlayingLabel = document.querySelector("#now-playing");
    const updateDisplayLabel = (text) => {
        if (nowPlayingLabel) {
            nowPlayingLabel.innerText = text;
        }
    };
    bgm.addEventListener("timeupdate", () => {
        sessionStorage.setItem("bgm_timestamp", bgm.currentTime.toString());
        sessionStorage.setItem("bgm_curr_idx", currIdx.toString());
    });
    bgm.addEventListener("ended", () => {
        currIdx = (currIdx + 1) % playlist.length;
        bgm.src = playlist[currIdx];
        bgm.currentTime = 0;
        updateDisplayLabel(`🎵 now playing: ${trackNames[currIdx]}`);
        bgm.play().catch((err) => {
            console.error(`[Error] The playlist track cycle was blocked: ${err}`);
        });
    });
    const togglePlayback = () => {
        if (!disc)
            return;
        if (disc.classList.contains("spinning")) {
            bgm.pause();
            disc.classList.remove("spinning");
            sessionStorage.setItem("bgm_is_playing", "false");
            updateDisplayLabel("⏸ music paused...");
        }
        else {
            if (bgm.currentTime === 0 || bgm.paused) {
                currIdx = Math.floor(Math.random() * playlist.length);
                bgm.src = playlist[currIdx];
            }
            updateDisplayLabel(`🎵 now playing: ${trackNames[currIdx]}`);
            bgm.play()
                .then(() => {
                disc.classList.add("spinning");
                sessionStorage.setItem("bgm_is_playing", "true");
            })
                .catch((err) => {
                console.error(`[Error] Could not start audio: ${err}`);
            });
        }
    };
    if (isPlayingState && disc) {
        updateDisplayLabel(`🎵 now playing: ${trackNames[currIdx]}`);
        bgm.play()
            .then(() => disc.classList.add("spinning"))
            .catch(() => updateDisplayLabel("🎵 click the disc to resume..."));
    }
    disc?.addEventListener("click", togglePlayback);
}

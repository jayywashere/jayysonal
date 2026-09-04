export function initReadingProgress(): void {
    const progress =
        document.querySelector<HTMLProgressElement>("#reading-progress");

    if (!progress) return;

    const updateProgress = (): void => {
        const scrollTop = window.scrollY;
        const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const percentage =
            scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

        progress.value = percentage;
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();
}

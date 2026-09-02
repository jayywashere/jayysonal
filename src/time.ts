export function initializeTime(): void {
    const timeElement = document.querySelector("#local-time");
    if (!(timeElement instanceof HTMLElement)) {
        return;
    }

    const updateTime = (): void => {
        const now = new Date();

        timeElement.textContent = new Intl.DateTimeFormat("en-PH", {
            timeZone: "Asia/Manila",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
        }).format(now);
    }

    updateTime();
    setInterval(updateTime, 1000);
}
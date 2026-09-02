export function initializeTime(): void {
    const timeElement = document.querySelector("#local-time");
    if (!(timeElement instanceof HTMLElement)) {
        return;
    }

    const formatter = new Intl.DateTimeFormat("en-PH", {
        timeZone: "Asia/Manila",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
    });

    const updateTime = (): void => {
        timeElement.textContent = formatter.format(new Date());
    };

    updateTime();
    setInterval(updateTime, 1000);
}

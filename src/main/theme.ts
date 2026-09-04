export function initTheme(): void {
    const themeButton = document.querySelector<HTMLButtonElement>("#theme-btn");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.documentElement.classList.add("light");

        if (themeButton) {
            themeButton.textContent = "🌙 Dark";
        }
    }

    themeButton?.addEventListener("click", () => {
        document.documentElement.classList.toggle("light");

        const isLight = document.documentElement.classList.contains("light");

        localStorage.setItem("theme", isLight ? "light" : "dark");

        themeButton.textContent = isLight ? "🌙 Dark" : "☀️ Light";
    });
}

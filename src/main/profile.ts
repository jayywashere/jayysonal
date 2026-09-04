export function initProfilePic(): void {
    const profilePic = document.querySelector<HTMLImageElement>("#pfp-icon");

    profilePic?.addEventListener("click", () => {
        profilePic.classList.toggle("spinning");
    });
}

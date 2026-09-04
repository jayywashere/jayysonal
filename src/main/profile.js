export function initProfilePic() {
    const profilePic = document.querySelector("#pfp-icon");
    profilePic?.addEventListener("click", () => {
        profilePic.classList.toggle("spinning");
    });
}

import { remove } from "../../api/storage/remove";

export function setLogoutListener() {
    const logoutButton = document.getElementById("logout");
    logoutButton.addEventListener("click", () => {
        remove("token");
        remove("profile");
        window.location.href="/";
    })
}

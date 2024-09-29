import { onLogout } from "../auth/logout";

export function setLogoutListener() {
    const logoutButton = document.getElementById("logout");
    logoutButton.addEventListener("click", onLogout);
}

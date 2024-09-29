import { onLogout } from "../auth/logout";

/**
 * Sets up an event listener for the logout button.
 * When the button is clicked, the user is logged out via the onLogout function.
 * 
 * @function setLogoutListener
 * @returns {void}
 * 
 */
export function setLogoutListener() {
    const logoutButton = document.getElementById("logout");
    logoutButton.addEventListener("click", onLogout);
}

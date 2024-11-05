import { remove } from "../../api/storage/remove";

/**
 * Logs the user out by removing the token and profile from local storage.
 * Redirects the user to the homepage.
 *
 * @function onLogout
 * @returns {void} Nothing is returned, but the user is logged out and redirected.
 *
 * @example
 * const logoutButton = document.getElementById("logout-button");
 * logoutButton.addEventListener("click", onLogout);
 */
export function onLogout() {
  remove("token");
  remove("profile");
  window.location.href = "/";
}


/**
 * Protects a page by checking if the user is logged in.
 * If no token is found in localStorage, the user is redirected to the login page.
 * 
 * @function authGuard
 * @returns {void}
 * 
 * @example
 * // Call this function on a protected page to ensure the user is logged in
 * authGuard();
 */
export function authGuard() {
  if (!localStorage.token) {
    alert("You must be logged in to view this page");
    window.location.href = "/auth/login/";
  }
}

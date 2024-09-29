import { login } from "../../api/auth/login";
import { displayMessage } from "../global/displayMessage";
import { hideSpinner, showSpinner } from "../global/spinner";

/**
 * Handles the login form submission, collects user input, and calls the API login function.
 * Displays appropriate success or error messages based on the login result.
 * 
 * @async
 * @function onLogin
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} Nothing is returned, but the page is redirected on success.
 * @throws {Error} Will throw an error if the login request fails or an error occurs in the process.
 * 
 * @example
 * const loginForm = document.getElementById("login-form");
 * loginForm.addEventListener("submit", onLogin);
 */
export async function onLogin(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const account = Object.fromEntries(formData.entries());

    try {
        showSpinner();
        await login(account); 
        displayMessage("Login successful!", "success");
        setTimeout(() => {
            window.location.href="/"
        }, 2000); 
    } catch (error) {
        displayMessage(error.message, "error");
    } finally {
        hideSpinner();
    }
} 

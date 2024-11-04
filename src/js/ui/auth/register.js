import { register } from "../../api/auth/register";
import { displayMessage } from "../global/displayMessage";
import { hideSpinner, showSpinner } from "../global/spinner";

/**
 * Handles the registration form submission, collects user input, and calls the API register function.
 * Resets the registration page and displays a success message with a link to log in.
 *
 * @async
 * @function onRegister
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} Nothing is returned, but the page is reset and a login link is displayed.
 * @throws {Error} Will throw an error if the registration request fails.
 *
 * @example
 * const registerForm = document.getElementById("register-form");
 * registerForm.addEventListener("submit", onRegister);
 */
export async function onRegister(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const account = Object.fromEntries(formData.entries());

  const resetRegisterPage = () => {
    const content = document.getElementById("register-page-content");
    content.innerHTML = "";

    displayMessage("You have registered an account!", "success");

    const loginLink = document.createElement("a");
    loginLink.setAttribute("href", "/auth/login/");
    loginLink.classList.add("button");
    loginLink.innerText = "Log in";

    content.appendChild(loginLink);
  };

  try {
    showSpinner();
    await register(account);
  } catch (error) {
    displayMessage(error.message, "error");
  } finally {
    hideSpinner();
  }

  resetRegisterPage();
}

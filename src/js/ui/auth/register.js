import { register } from "../../api/auth/register";
import { displayMessage } from "../global/displayMessage";
import { hideSpinner, showSpinner } from "../global/spinner";

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
    }

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
import { login } from "../../api/auth/login";
import { displayMessage } from "../global/displayMessage";

export async function onLogin(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const account = Object.fromEntries(formData.entries());

    try {
        await login(account); 
        displayMessage("Login successful!", "success");
        setTimeout(() => {
            window.location.href="/"
        }, 2000); 
    } catch (error) {
        displayMessage(error.message, "error");
    }
} 

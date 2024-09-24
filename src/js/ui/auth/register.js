import { register } from "../../api/auth/register";
import { displayMessage } from "../global/displayMessage";

export async function onRegister(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const account = Object.fromEntries(formData.entries());

    try {
        await register(account); 
        displayMessage("You have registered an account!", "success");
    } catch (error) {
        displayMessage(error.message, "error");
    }
}
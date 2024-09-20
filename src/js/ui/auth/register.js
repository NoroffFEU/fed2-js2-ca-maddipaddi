import { register } from "../../api/auth/register";

export async function onRegister(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const account = Object.fromEntries(formData.entries());

    register(account); 
}

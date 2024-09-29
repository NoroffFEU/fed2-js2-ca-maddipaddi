import { onLogin } from "../../ui/auth/login";

function init() {
    const form = document.forms.login;
    form.addEventListener("submit", onLogin);
}

init();
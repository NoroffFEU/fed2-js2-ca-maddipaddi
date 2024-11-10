import { onRegister } from "../../ui/auth/register";
import { onLogin } from "../../ui/auth/login";
import { toggleTheme } from "../../ui/global/toggleTheme";

function registerInit() {
  const form = document.forms.register;
  form.addEventListener("submit", onRegister);
}

registerInit();

function loginInit() {
  const form = document.forms.login;
  form.addEventListener("submit", onLogin);
}

loginInit();

toggleTheme();

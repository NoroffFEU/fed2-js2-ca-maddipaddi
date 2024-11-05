import { onRegister } from "../../ui/auth/register";

function init() {
  const form = document.forms.register;
  form.addEventListener("submit", onRegister);
}

init();

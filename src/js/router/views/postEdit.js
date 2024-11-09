import { setLogoutListener } from "../../ui/global/logout";
import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";
import { getUserName } from "../../utilities/getUserName";

import { getUserPhoto } from "../../utilities/getUserPhoto";
import { populateForm } from "../../utilities/populatePostFormToEdit";

function init() {
  authGuard();
  setLogoutListener();
  getUserName();
  getUserPhoto();
  populateForm();

  const form = document.forms.editPost;
  form.addEventListener("submit", onUpdatePost);
}

init();

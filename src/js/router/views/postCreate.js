import { setLogoutListener } from "../../ui/global/logout";
import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { getUserName } from "../../utilities/getUserName";
import { getUserPhoto } from "../../utilities/getUserPhoto";

function init() {
  setLogoutListener();
  authGuard();
  getUserName();
  getUserPhoto();
  const form = document.forms.createPost;
  form.addEventListener("submit", onCreatePost);
}

init();

import { setLogoutListener } from "../../ui/global/logout";
import { renderPostsByUser } from "../../ui/post/read";
import { profileTemplate } from "../../ui/templates/profileTemplate";
import { authGuard } from "../../utilities/authGuard";

function init() {
  authGuard();
  profileTemplate();
  renderPostsByUser();
  setLogoutListener();
}

init();

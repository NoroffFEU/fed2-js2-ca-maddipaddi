import { authGuard } from "../../utilities/authGuard";
import { renderPosts } from "../../ui/post/read";
import { setLogoutListener } from "../../ui/global/logout";

function init() {
  authGuard();
  setLogoutListener();
  renderPosts();
}

init();

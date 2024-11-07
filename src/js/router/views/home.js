import { authGuard } from "../../utilities/authGuard";
import { renderPosts } from "../../ui/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { getUserPhoto } from "../../utilities/getUserPhoto";
import { getUserName } from "../../utilities/getUserName";

function init() {
  authGuard();
  setLogoutListener();
  getUserName();
  getUserPhoto();
  renderPosts();
}

init();

import { setLogoutListener } from "../../ui/global/logout";
import { renderPost } from "../../ui/post/read";
import { getUserName } from "../../utilities/getUserName";
import { getUserPhoto } from "../../utilities/getUserPhoto";

function init() {
  setLogoutListener();
  getUserName();
  getUserPhoto();
  renderPost();
}

init();

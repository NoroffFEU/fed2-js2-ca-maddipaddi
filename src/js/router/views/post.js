import { setLogoutListener } from "../../ui/global/logout";
import { toggleTheme } from "../../ui/global/toggleTheme";
import { renderPost } from "../../ui/post/read";
import { getUserName } from "../../utilities/getUserName";
import { getUserPhoto } from "../../utilities/getUserPhoto";

function init() {
  setLogoutListener();
  toggleTheme();
  getUserName();
  getUserPhoto();
  renderPost();
}

init();

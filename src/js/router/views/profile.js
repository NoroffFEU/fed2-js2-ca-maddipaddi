import { setLogoutListener } from "../../ui/global/logout";
import { toggleTheme } from "../../ui/global/toggleTheme";
import { renderPostsByUser } from "../../ui/post/read";
import { profileTemplate } from "../../ui/templates/profileTemplate";
import { authGuard } from "../../utilities/authGuard";
import { getUserBanner } from "../../utilities/getUserBanner";
import { getUserName } from "../../utilities/getUserName";
import { getUserPhoto } from "../../utilities/getUserPhoto";

function init() {
  authGuard();
  toggleTheme();
  getUserName();
  getUserPhoto();
  getUserBanner();
  profileTemplate();
  renderPostsByUser();
  setLogoutListener();
}

init();

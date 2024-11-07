import { renderPost } from "../../ui/post/read";
import { getUserName } from "../../utilities/getUserName";
import { getUserPhoto } from "../../utilities/getUserPhoto";

function init() {
  getUserName();
  getUserPhoto();
  renderPost();
}

init();

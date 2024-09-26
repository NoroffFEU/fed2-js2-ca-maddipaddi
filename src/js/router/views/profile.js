import { renderPostsByUser } from "../../ui/post/read";
import { profileTemplate } from "../../ui/templates/profileTemplate";
import { authGuard } from "../../utilities/authGuard";

authGuard();
profileTemplate();
renderPostsByUser();
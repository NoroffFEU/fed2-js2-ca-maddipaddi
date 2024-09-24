import { authGuard } from "../../utilities/authGuard";
import { renderPosts } from "../../ui/post/read";

authGuard();

renderPosts();

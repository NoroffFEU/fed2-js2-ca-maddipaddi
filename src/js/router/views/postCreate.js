import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";


function init() {
    authGuard();

    const form = document.forms.createPost;
    form.addEventListener("submit", onCreatePost);
}

init();
import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";
import { populateForm } from "../../utilities/populatePostFormToEdit";

authGuard();

populateForm();

const form = document.forms.editPost;

form.addEventListener("submit", onUpdatePost);
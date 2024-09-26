import { load } from "../api/storage/load";
import { onDeletePost } from "../ui/post/delete";

export const appendDeleteButton = (post, author) => {
    
   const profile = load("profile");
   const userName = profile.name;

   if (author === userName) {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("id", `${post.id}`);
    deleteButton.addEventListener("click", onDeletePost);

    return deleteButton;
   } else {
      return "";
   }
}
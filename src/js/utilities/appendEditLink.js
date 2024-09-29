import { load } from "../api/storage/load";

export const appendEditLink = (post, author) => {
    
   const profile = load("profile");
   const userName = profile.name;

   if (author === userName) {
    const editLink = document.createElement("a");
    editLink.innerText = "Edit";
    editLink.setAttribute("href", `/post/edit/?id=${post.id}`)
    editLink.setAttribute("id", "edit-link");
    editLink.classList.add("button");
    return editLink;
   } else {
      return "";
   }
}
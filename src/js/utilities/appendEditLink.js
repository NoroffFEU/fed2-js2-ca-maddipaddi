import { load } from "../api/storage/load";

export const appendEditLink = (post, author) => {
    
   const profile = load("profile");
   const userName = profile.name;

   if (author === userName) {
    const editLink = document.createElement("a");
    editLink.innerText = "edit";
    editLink.setAttribute("href", `/post/edit/?id=${post.id}`)
    editLink.setAttribute("id", "edit-link");
    return editLink;
   } else {
      return "";
   }
}
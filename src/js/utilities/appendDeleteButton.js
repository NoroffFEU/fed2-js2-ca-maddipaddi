import { load } from "../api/storage/load";
import { onDeletePost } from "../ui/post/delete";

/**
 * Creates a delete button for the given post if the current user is the author.
 * The button triggers the deletion of the post when clicked.
 * 
 * @function appendDeleteButton
 * @param {Object} post - The post data object.
 * @param {string} author - The author's username of the post.
 * @returns {HTMLElement|string} The delete button element if the current user is the author, otherwise an empty string.
 * 
 * @example
 * const post = { id: 1, title: "I am angry", author: { name: "John" } };
 * const deleteButton = appendDeleteButton(post, post.author.name);
 * if (deleteButton) {
 *   document.body.appendChild(deleteButton);
 * }
 */
export const appendDeleteButton = (post, author) => {
    
   const profile = load("profile");
   const userName = profile.name;

   if (author === userName) {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("id", `${post.id}`);
    deleteButton.classList.add("button", "delete");
    deleteButton.addEventListener("click", onDeletePost);

    return deleteButton;
   } else {
      return "";
   }
}
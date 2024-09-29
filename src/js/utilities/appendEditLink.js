import { load } from "../api/storage/load";

/**
 * Creates an edit link for the given post if the current user is the author.
 * The link redirects the user to the edit page for the post.
 * 
 * @function appendEditLink
 * @param {Object} post - The post data object.
 * @param {string} author - The author's username of the post.
 * @returns {HTMLElement|string} The edit link element if the current user is the author, otherwise an empty string.
 * 
 * @example
 * const post = { id: 1, title: "I am sad", author: { name: "John" } };
 * const editLink = appendEditLink(post, post.author.name);
 * if (editLink) {
 *   document.body.appendChild(editLink);
 * }
 */
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
import { deletePost } from "../../api/post/delete";
import { redirectAfterDeletion } from "../../utilities/redirectAfterDeletionOfPost";

/**
 * Handles the deletion of a post by its ID.
 * Displays a success message and redirects after deletion.
 * 
 * @async
 * @function onDeletePost
 * @param {Event} event - The click event for the delete button.
 * @returns {Promise<void>} Nothing is returned, but the post is deleted and the page redirects.
 * @throws {Error} Will throw an error if the post deletion fails.
 * 
 * @example
 * const deleteButton = document.getElementById("delete-button");
 * deleteButton.addEventListener("click", onDeletePost);
 */
export async function onDeletePost(event) {
    event.preventDefault(); 
     
    const deleteButton = event.target;
    const postId = deleteButton.getAttribute("id");
  
   try {
    await deletePost(postId);
    alert("The post was deleted");
    redirectAfterDeletion();
  
   } catch (error) {
    throw new Error("The post could not be deleted.");
   }
  
}


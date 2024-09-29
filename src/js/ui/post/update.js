import { updatePost } from "../../api/post/update";
import { findPostID } from "../../utilities/findPostID";
import { setMediaObject } from "../../utilities/setMediaObject";
import { stringToArray } from "../../utilities/stringToArray";

/**
 * Handles the update post form submission, collects user input, and updates the post.
 * 
 * @async
 * @function onUpdatePost
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} Nothing is returned, but the post is updated.
 * @throws {Error} Will throw an error if the post update fails.
 * 
 * @example
 * const updateForm = document.getElementById("update-form");
 * updateForm.addEventListener("submit", onUpdatePost);
 */
export async function onUpdatePost(event) {
    event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
  
       const tagsAsArray = stringToArray(formValues.tags);
       const mediaAsObject = setMediaObject(formValues.mediaURL, formValues.mediaALT);
    
       const id = findPostID();
      
       const postData = {
          title: formValues.title,
          media: mediaAsObject,
          body: formValues.body,
          tags: tagsAsArray
      }
  
    updatePost(id, postData); 
}
import { createPost } from "../../api/post/create";
import { setMediaObject } from "../../utilities/setMediaObject";
import { stringToArray } from "../../utilities/stringToArray";
import { displayMessage } from "../global/displayMessage";

/**
 * Handles the create post form submission, collects user input, and creates a new post.
 * Displays a success message and reloads the page after 2 seconds.
 *
 * @async
 * @function onCreatePost
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} Nothing is returned, but the post is created and the page reloads.
 * @throws {Error} Will throw an error if the post creation fails.
 *
 * @example
 * const postForm = document.getElementById("post-form");
 * postForm.addEventListener("submit", onCreatePost);
 */
export async function onCreatePost(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  const tagsAsArray = stringToArray(formValues.tags);
  const mediaAsObject = setMediaObject(
    formValues.mediaURL,
    formValues.mediaALT
  );

  const postData = {
    title: formValues.title,
    media: mediaAsObject,
    body: formValues.body,
    tags: tagsAsArray,
  };

  try {
    await createPost(postData);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (error) {
    displayMessage(error.message, "error");
  }
}

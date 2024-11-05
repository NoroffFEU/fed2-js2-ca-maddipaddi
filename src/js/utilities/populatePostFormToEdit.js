import { findPostID } from "./findPostID";
import { readPost } from "../api/post/read";

/**
 * Populates a form with post data by fetching the post based on its ID.
 * The function assumes form inputs with specific IDs like "title", "mediaURL", "mediaALT", "body", and "tags".
 *
 * @async
 * @function populateForm
 * @returns {Promise<void>} Nothing is returned, but the form is populated with post data.
 * @throws {Error} Will throw an error if the post cannot be fetched or the form cannot be populated.
 *
 * @example
 * // Call this function when editing a post to auto-fill the form fields.
 * populateForm();
 */
export async function populateForm() {
  const id = findPostID();
  const post = await readPost(id);

  document.getElementById("title").value = post.title;
  document.getElementById("body").value = post.body;
  document.getElementById("tags").value = post.tags;
  document.getElementById("mediaURL").value = post.media.url;
  document.getElementById("mediaALT").value = post.media.alt;
}

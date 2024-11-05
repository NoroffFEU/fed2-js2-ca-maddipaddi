import { displayMessage } from "../../ui/global/displayMessage";
import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";

/**
 * Updates a specific post by its ID with the provided post details.
 *
 * @async
 * @function updatePost
 * @param {number|string} id - The ID of the post to update.
 * @param {Object} postDetails - The updated details of the post.
 * @param {string} postDetails.title - The updated title of the post.
 * @param {string} postDetails.body - The updated body content of the post.
 * @param {Array<string>} [postDetails.tags] - The updated tags for the post (optional).
 * @param {string} [postDetails.media] - The updated media URL for the post (optional).
 * @returns {Promise<Object>} The updated post data returned by the API.
 * @throws {Error} Will throw an error if the post ID is not provided or if the API request fails.
 *
 * @example
 * const postId = 123;
 * const updatedPost = {
 *   title: "Updated Post Title",
 *   body: "Updated post content",
 *   tags: ["newTag"],
 *   media: "https://example.com/newImage.jpg"
 * };
 *
 * updatePost(postId, updatedPost)
 *   .then(post => console.log('Post updated successfully:', post))
 *   .catch(error => console.error('Failed to update post:', error.message));
 */
export async function updatePost(id, { title, body, tags, media }) {
  if (!id) {
    throw new Error("Update requires a post ID");
  }

  const response = await authFetch(`${API_SOCIAL_POSTS}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, body, tags, media }),
  });

  if (response.ok) {
    displayMessage("Post updated successfully!", "success");
  } else {
    throw new Error("Failed to update the post");
  }

  return await response.json();
}

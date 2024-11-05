import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";

/**
 * Deletes a post by its ID.
 *
 * @async
 * @function deletePost
 * @param {number|string} id - The ID of the post to delete.
 * @returns {Promise<void>} Resolves if the post is deleted successfully, throws an error otherwise.
 * @throws {Error} Will throw an error if no ID is provided or if the API request fails.
 *
 * @example
 * const postId = 123;
 *
 * deletePost(postId)
 *   .then(() => console.log('Post deleted successfully'))
 *   .catch(error => console.error('Failed to delete post:', error.message));
 */
export async function deletePost(id) {
  if (!id) {
    throw new Error("Delete requires a post id");
  }

  await authFetch(`${API_SOCIAL_POSTS}/${id}`, {
    method: "DELETE",
  });
}

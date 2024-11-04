/**
 * Retrieves the post ID from the URL query parameters.
 *
 * @function findPostID
 * @returns {string|null} The post ID from the URL, or null if not found.
 *
 * @example
 * const postID = findPostID();
 * if (postID) {
 *   console.log('Post ID:', postID);
 * }
 */
export function findPostID() {
  const urlParams = new URLSearchParams(window.location.search);
  const postID = urlParams.get("id");
  return postID;
}

import { displayMessage } from "../../ui/global/displayMessage";
import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";


/**
 * Creates a new post by sending the post details to the API.
 * 
 * @async
 * @function createPost
 * @param {Object} postDetails - The details of the post to create.
 * @param {string} postDetails.title - The title of the post.
 * @param {string} postDetails.body - The body content of the post.
 * @param {Array<string>} [postDetails.tags] - The tags for the post (optional).
 * @param {string} [postDetails.media] - The media URL associated with the post (optional).
 * @returns {Promise<void>} Resolves if the post is created successfully, throws an error otherwise.
 * @throws {Error} Will throw an error if the API request fails or the response is invalid.
 * 
 * @example
 * const newPost = {
 *   title: "My First Post",
 *   body: "This is the body of my post",
 *   tags: ["web", "javascript"],
 *   media: "https://example.com/image.jpg"
 * };
 * 
 * createPost(newPost)
 *   .then(() => console.log('Post created successfully'))
 *   .catch(error => console.error('Failed to create post:', error.message));
 */
export async function createPost({ title, body, tags, media }) {
    const response = await authFetch(API_SOCIAL_POSTS, {
        method: "POST",
        body: JSON.stringify({ title, body, tags, media })
    })

    if (response.ok) {
        return displayMessage("Post has been created successfully!", "success");
    }

    throw new Error("Could not create post");
    
}

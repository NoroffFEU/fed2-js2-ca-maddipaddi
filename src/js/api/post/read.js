import { hideSpinner, showSpinner } from "../../ui/global/spinner";
import { handleErrors } from "../../utilities/handleErrors";
import { displayMessage } from "../../ui/global/displayMessage";
import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from "../constants";


/**
 * Reads a specific post by its ID and optionally includes the author information.
 * 
 * @async
 * @function readPost
 * @param {number|string} id - The ID of the post to read.
 * @param {boolean} [includeAuthor=true] - Whether to include the author's information in the response (default is true).
 * @returns {Promise<Object>} The post data returned by the API.
 * @throws {Error} Will throw an error if the post ID is not provided or if the API request fails.
 * 
 * @example
 * const postId = 123;
 * 
 * readPost(postId)
 *   .then(post => console.log('Post data:', post))
 *   .catch(error => console.error('Failed to fetch post:', error.message));
 */
export async function readPost(id, includeAuthor = true) {

    try {
        showSpinner();

        if (!id) {
            throw new Error("Read requires a post ID");
        }
    
        const queryParams = new URLSearchParams({   
            _author: includeAuthor ? "true" : "false"
        });

        const response = await authFetch(`${API_SOCIAL_POSTS}/${id}?${queryParams.toString()}`);

        await handleErrors(response);

        const post = await response.json();
        return post.data;

    } catch (error) {
        displayMessage(error.message, "error");
    } finally {
        hideSpinner();
    }
    
}


/**
 * Reads a list of posts with optional filters such as limit, page number, and tag.
 * 
 * @async
 * @function readPosts
 * @param {number} [limit=12] - The maximum number of posts to retrieve (default is 12).
 * @param {number} [page=1] - The page number for pagination (default is 1).
 * @param {string} [tag] - An optional tag to filter the posts.
 * @param {boolean} [includeAuthor=true] - Whether to include the authors' information in the response (default is true).
 * @returns {Promise<Array>} An array of posts sorted by creation date.
 * @throws {Error} Will throw an error if the API request fails.
 * 
 * @example
 * readPosts(10, 1, "javascript")
 *   .then(posts => console.log('Posts:', posts))
 *   .catch(error => console.error('Failed to fetch posts:', error.message));
 */
export async function readPosts(limit = 12, page = 1, tag, includeAuthor = true) {
    
    try {
        showSpinner();

        const queryParams = new URLSearchParams({
            limit: limit,     
            page: page,     
            _author: includeAuthor ? "true" : "false"
        });
    
        if (tag) {
            queryParams.append("tag", tag);
        }

        const response = await authFetch(`${API_SOCIAL_POSTS}?${queryParams.toString()}`);

        await handleErrors(response);

        const result = await response.json();
        const posts = result.data;
   
        const sortedPosts = posts.sort((a, b) => new Date(b.created) - new Date(a.created));
        return sortedPosts;
    } catch (error) {
        displayMessage(error.message, "error");
    } finally {
        hideSpinner();
    }
    
 
}


/**
 * Reads a list of posts created by a specific user with optional filters.
 * 
 * @async
 * @function readPostsByUser
 * @param {string} username - The username of the user whose posts to retrieve.
 * @param {number} [limit=12] - The maximum number of posts to retrieve (default is 12).
 * @param {number} [page=1] - The page number for pagination (default is 1).
 * @param {string} [tag] - An optional tag to filter the posts.
 * @param {boolean} [includeAuthor=true] - Whether to include the author's information in the response (default is true).
 * @returns {Promise<Array>} An array of posts by the specified user.
 * @throws {Error} Will throw an error if the API request fails.
 * 
 * @example
 * const username = "johnwick";
 * 
 * readPostsByUser(username, 10, 1, "webdev")
 *   .then(posts => console.log('User posts:', posts))
 *   .catch(error => console.error('Failed to fetch user posts:', error.message));
 */
export async function readPostsByUser(username, limit = 12, page = 1, tag, includeAuthor = true) {
    
    try {
        showSpinner();

        const queryParams = new URLSearchParams({
            limit: limit,     
            page: page,     
            _author: includeAuthor ? "true" : "false"
        });
    
        if (tag) {
            queryParams.append("tag", tag);
        }

        const response = await authFetch(`${API_SOCIAL_PROFILES}/${username}/posts?${queryParams.toString()}`);

        await handleErrors(response);
        
        const result = await response.json();
        const posts = result.data;
       
        const sortedPosts = posts.sort((a, b) => new Date(b.created) - new Date(a.created));
        return sortedPosts;
        
    } catch (error) {
        displayMessage(error.message, "error");
        
    } finally {
        hideSpinner();
    }

   
}

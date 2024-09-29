import { hideSpinner, showSpinner } from "../../ui/global/spinner";
import { handleErrors } from "../../utilities/handleErrors";
import { displayMessage } from "../../ui/global/displayMessage";
import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from "../constants";

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

import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from "../constants";

export async function readPost(id, includeAuthor = true) {
    if (!id) {
        throw new Error("Read requires a post ID");
    }

    const queryParams = new URLSearchParams({   
        _author: includeAuthor ? "true" : "false"
    });

    const response = await authFetch(`${API_SOCIAL_POSTS}/${id}?${queryParams.toString()}`);

    const post = await response.json();
    return post.data;
}

export async function readPosts(limit = 12, page = 1, tag, includeAuthor = true) {
    const queryParams = new URLSearchParams({
        limit: limit,     
        page: page,     
        _author: includeAuthor ? "true" : "false"
    });

    if (tag) {
        queryParams.append("tag", tag);
    }

    const response = await authFetch(`${API_SOCIAL_POSTS}?${queryParams.toString()}`);

    const result = await response.json();
    const posts = result.data;
   
    const sortedPosts = posts.sort((a, b) => new Date(b.created) - new Date(a.created));
    return sortedPosts;
 
}

export async function readPostsByUser(username, limit = 12, page = 1, tag, includeAuthor = true) {
    const queryParams = new URLSearchParams({
        limit: limit,     
        page: page,     
        _author: includeAuthor ? "true" : "false"
    });

    if (tag) {
        queryParams.append("tag", tag);
    }

    const response = await authFetch(`${API_SOCIAL_PROFILES}/${username}/posts?${queryParams.toString()}`);

    const result = await response.json();
    const posts = result.data;
   
    const sortedPosts = posts.sort((a, b) => new Date(b.created) - new Date(a.created));
    return sortedPosts;
}

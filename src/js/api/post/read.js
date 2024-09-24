import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";

export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1, tag) {
    const queryParams = new URLSearchParams({
        limit: limit,     
        page: page,       
    });

    if (tag) {
        queryParams.append("tag", tag);
    }

    const response = await authFetch(`${API_SOCIAL_POSTS}?${queryParams.toString()}`);

    const posts = await response.json();
    return posts.data;
 
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}

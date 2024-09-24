import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";

export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1, tag) {
    const response = await authFetch(API_SOCIAL_POSTS, {
        
    });

    const posts = await response.json();
    return posts.data;
 
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}

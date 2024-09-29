import { readPost, readPosts, readPostsByUser } from "../../api/post/read";
import { postsTemplate } from "../templates/postsTemplate";
import { findPostID } from "../../utilities/findPostID";
import { singlePostTemplate } from "../templates/singlePostTemplate";
import { load } from "../../api/storage/load";

/**
 * Renders a single post on the page by fetching the post data and using the post template.
 * 
 * @async
 * @function renderPost
 * @returns {Promise<void>} Nothing is returned, but the post is rendered on the page.
 * @throws {Error} Will throw an error if the post data cannot be fetched.
 * 
 */
export async function renderPost () {
    const postContainer = document.getElementById("post-container"); 
    
    const id = findPostID();
    const post = await readPost(id);
    const postElement = singlePostTemplate(post);
    
    postContainer.appendChild(postElement);
 
}


/**
 * Renders a list of posts on the page by fetching the post data and using the post template.
 * 
 * @async
 * @function renderPosts
 * @returns {Promise<void>} Nothing is returned, but the posts are rendered on the page.
 * @throws {Error} Will throw an error if the posts cannot be fetched.
 * 
 */
export async function renderPosts () {
    const postsContainer = document.getElementById("posts-container"); 
    
    const posts = await readPosts();
    const postElements = postsTemplate(posts);
    
    postElements.forEach(postElement => {
        postsContainer.appendChild(postElement);
    });
}

/**
 * Renders a list of posts created by the current user on the page.
 * Fetches the posts from the API and uses the post template for display.
 * 
 * @async
 * @function renderPostsByUser
 * @returns {Promise<void>} Nothing is returned, but the user's posts are rendered on the page.
 * @throws {Error} Will throw an error if the user's posts cannot be fetched.
 * 
 */
export async function renderPostsByUser () {
    const postsContainer = document.getElementById("user-posts"); 
    const profile = load("profile");
    const profileName = profile.name;
    
    const posts = await readPostsByUser(profileName);
    const postElements = postsTemplate(posts);
    
    postElements.forEach(postElement => {
        postsContainer.appendChild(postElement);
    });
}
import { readPost, readPosts, readPostsByUser } from "../../api/post/read";
import { postsTemplate } from "../templates/postsTemplate";
import { findPostID } from "../../utilities/findPostID";
import { singlePostTemplate } from "../templates/singlePostTemplate";
import { load } from "../../api/storage/load";


export async function renderPost () {
    const postContainer = document.getElementById("post-container"); 
    
    const id = findPostID();
    const post = await readPost(id);
    const postElement = singlePostTemplate(post);
    
    postContainer.appendChild(postElement);
 
}



export async function renderPosts () {
    const postsContainer = document.getElementById("posts-container"); 
    
    const posts = await readPosts();
    const postElements = postsTemplate(posts);
    
    postElements.forEach(postElement => {
        postsContainer.appendChild(postElement);
    });
}

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
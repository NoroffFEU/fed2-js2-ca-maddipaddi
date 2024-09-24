import { readPosts } from "../../api/post/read";
import { postTemplate } from "../templates/postTemplate";

export async function renderPosts () {
    const postsContainer = document.getElementById("posts-container"); 
    
    const posts = await readPosts();
    const postElements = postTemplate(posts);
    
    postElements.forEach(postElement => {
        postsContainer.appendChild(postElement);
    });
}
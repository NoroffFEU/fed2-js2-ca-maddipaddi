import { appendDeleteButton } from "../../utilities/appendDeleteButton";
import { appendEditLink } from "../../utilities/appendEditLink";

export function singlePostTemplate(post) {
    
        const postElement = document.createElement("div");
        postElement.classList.add("post-element");

        const user = document.createElement("p");
        user.innerText = `Posted by: ${post.author.name}`;
        postElement.appendChild(user);

        const title = document.createElement("h2");
        title.innerText = post.title;
        

        let mediaContainer;

        if (post.media && post.media.url) {
            mediaContainer = document.createElement("div");
            const media = document.createElement("img");
            media.setAttribute("src", post.media.url);
            media.setAttribute("alt", post.media.alt || "Post image");

         
            mediaContainer.appendChild(media);
            postElement.appendChild(mediaContainer);
        }

        const body = document.createElement("p");
        body.innerText = post.body;

        const tags = document.createElement("p");
        tags.innerText = post.tags; 

        postElement.append(title, body, tags, appendEditLink(post, post.author.name), appendDeleteButton(post, post.author.name));

        return postElement;
}
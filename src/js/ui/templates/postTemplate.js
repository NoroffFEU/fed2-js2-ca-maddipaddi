export function postTemplate(posts) {
    return posts.map(post => {
        const postElement = document.createElement("div");

        const title = document.createElement("h2");
        title.innerText = post.title;
    
        /*const mediaContainer = document.createElement("div");
        const media = document.createElement("img");
        media.setAttribute("src", post.media.url);
        media.setAttribute("alt", post.media.alt);
        mediaContainer.appendChild(media);*/

        const body = document.createElement("p");
        body.innerText = post.body; 

        const tags = document.createElement("p");
        tags.innerText = post.tags; 

        postElement.append(title, body, tags);
        
        return postElement;
    });
}
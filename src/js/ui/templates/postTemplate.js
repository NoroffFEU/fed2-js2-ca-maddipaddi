export function postTemplate(posts) {
    return posts.map(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post-element");

        const title = document.createElement("h2");
        title.innerText = post.title;


        const clickableThumbnail = document.createElement("a");
        clickableThumbnail.setAttribute("href", `post/index.html?id=${post.id}`);
        

        let mediaContainer;

        if (post.media && post.media.url) {
            mediaContainer = document.createElement("div");
            const media = document.createElement("img");
            media.setAttribute("src", post.media.url);
            media.setAttribute("alt", post.media.alt || "Post image");

         
            mediaContainer.appendChild(media);
            clickableThumbnail.appendChild(mediaContainer);
        }

        const body = document.createElement("p");
        body.innerText = post.body;

        const tags = document.createElement("p");
        tags.innerText = post.tags; 

        clickableThumbnail.append(title, body, tags);

        postElement.appendChild(clickableThumbnail);

        return postElement;
    });
}

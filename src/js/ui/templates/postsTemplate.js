import { appendDeleteButton } from "../../utilities/appendDeleteButton";
import { appendEditLink } from "../../utilities/appendEditLink";

/**
 * Creates an array of post elements from an array of post data.
 * Each post element includes the post title, body, tags, and media (if available).
 *
 * @function postsTemplate
 * @param {Array<Object>} posts - An array of post objects to render.
 * @returns {Array<Element>} An array of post elements created from the post data.
 *
 * @example
 * const posts = [
 *   { id: 1, title: "Where is my dog??", body: "You have made a grave mistake.", tags: ["dead"], author: { name: "John" } }
 * ];
 * const postElements = postsTemplate(posts);
 * postElements.forEach(postElement => document.body.appendChild(postElement));
 */
export function postsTemplate(posts) {
  return posts.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post-element");

    const clickableThumbnail = document.createElement("a");
    clickableThumbnail.setAttribute("href", `/post/?id=${post.id}`);

    const user = document.createElement("p");
    user.innerText = `Posted by: ${post.author.name}`;
    clickableThumbnail.appendChild(user);

    const title = document.createElement("h2");
    title.innerText = post.title;

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

    postElement.append(
      clickableThumbnail,
      appendEditLink(post, post.author.name),
      appendDeleteButton(post, post.author.name)
    );

    return postElement;
  });
}

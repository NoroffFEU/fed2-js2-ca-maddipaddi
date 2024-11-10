import { appendDeleteButton } from "../../utilities/appendDeleteButton";
import { appendEditLink } from "../../utilities/appendEditLink";
import { formatTags } from "../../utilities/formatTags";

/**
 * Creates a post element for a single post, including the post title, body, tags, and media (if available).
 *
 * @function singlePostTemplate
 * @param {Object} post - The post data object.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body content of the post.
 * @param {Array<string>} post.tags - The tags associated with the post.
 * @param {Object} post.media - The media object containing the media URL and alt text (optional).
 * @param {Object} post.author - The author of the post.
 * @returns {Element} The post element to be rendered on the page.
 *
 * @example
 * const post = {
 *   title: "Revenge is coming",
 *   body: "You and everyone you know are dead.",
 *   tags: ["revenge"],
 *   media: { url: "https://example.com/image.jpg", alt: "An image" },
 *   author: { name: "John" }
 * };
 * const postElement = singlePostTemplate(post);
 * document.body.appendChild(postElement);
 */
export function singlePostTemplate(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("card-body");

  const user = document.createElement("p");
  user.innerText = `Posted by: ${post.author.name}`;

  const title = document.createElement("h2");
  title.innerText = post.title;
  title.classList.add("card-title");

  let mediaContainer;

  if (post.media && post.media.url) {
    mediaContainer = document.createElement("div");
    const media = document.createElement("img");
    media.setAttribute("src", post.media.url);
    media.setAttribute("alt", post.media.alt || "Post image");
    media.classList.add("card-img");

    mediaContainer.appendChild(media);
  }

  const body = document.createElement("p");
  body.innerText = post.body;

  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("tagsContainer");
  const tags = post.tags;
  const formattedTags = formatTags(tags);

  formattedTags.forEach((tagElement) => {
    tagsContainer.appendChild(tagElement);
  });

  postElement.append(
    user,
    title,
    mediaContainer,
    body,
    tagsContainer,
    appendEditLink(post, post.author.name),
    appendDeleteButton(post, post.author.name)
  );

  return postElement;
}

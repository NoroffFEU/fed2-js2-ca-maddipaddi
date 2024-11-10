export function formatTags(tags) {
  if (!Array.isArray(tags)) {
    throw new TypeError("Expected an array as input");
  } else {
    return tags.map((tag) => {
      const tagContent = document.createElement("p");
      tagContent.classList.add("tags");
      tagContent.innerText = `#${tag}`;
      return tagContent;
    });
  }
}


/**
 * Creates a media object containing a URL and alt text if a URL is provided.
 * If no URL is provided, the function returns null.
 * 
 * @function setMediaObject
 * @param {string} stringURL - The media URL string.
 * @param {string} stringAlt - The media alt text string.
 * @returns {Object|null} A media object with `url` and `alt` properties, or null if no URL is provided.
 * 
 * @example
 * const media = setMediaObject("https://example.com/image.jpg", "An example image");
 * if (media) {
 *   console.log('Media object:', media);
 * }
 */
export function setMediaObject(stringURL, stringAlt) {
    const media = {
       url: stringURL,
       alt: stringAlt
     }

     if (stringURL === "") {
      return null;
     } else {
       return media;
      }
   }
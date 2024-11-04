/**
 * Converts a comma-separated string into an array of trimmed values.
 *
 * @function stringToArray
 * @param {string} inputString - The input string containing comma-separated values.
 * @returns {Array<string>} An array of trimmed strings.
 *
 * @example
 * const tagsArray = stringToArray("tag1, tag2, tag3");
 * console.log(tagsArray); // Output: ["tag1", "tag2", "tag3"]
 */
export function stringToArray(inputString) {
  return inputString
    .trim()
    .split(",")
    .map((item) => item.trim());
}

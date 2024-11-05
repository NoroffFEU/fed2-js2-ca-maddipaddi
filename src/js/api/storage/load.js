/**
 * Loads a value from `localStorage` by its key.
 * The value is parsed from JSON before being returned.
 *
 * @function load
 * @param {string} key - The key of the item to retrieve from localStorage.
 * @returns {any|null} The parsed value from localStorage, or `null` if the value is not found or an error occurs.
 *
 * @example
 * const userProfile = load("profile");
 * if (userProfile) {
 *   console.log('User profile loaded:', userProfile);
 * } else {
 *   console.log('No profile found');
 * }
 */
export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

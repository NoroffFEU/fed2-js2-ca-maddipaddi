/**
 * Saves a value to `localStorage` under a given key.
 * The value is stringified to JSON before being stored.
 *
 * @function save
 * @param {string} key - The key under which to store the value.
 * @param {any} value - The value to store in localStorage.
 *
 * @example
 * const userProfile = { name: "John Wick", age: 50 };
 * save("profile", userProfile);
 * console.log('User profile saved');
 */
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

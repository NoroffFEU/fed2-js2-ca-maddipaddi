/**
 * Removes an item from `localStorage` by its key.
 * 
 * @function remove
 * @param {string} key - The key of the item to remove from localStorage.
 * 
 * @example
 * remove("token");
 * console.log('Token removed from storage');
 */
export function remove(key) {
    localStorage.removeItem(key);
}
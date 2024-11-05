import { headers } from "./headers";

/**
 * Performs a fetch request with authorization headers if a token is available.
 * Can handle optional body data for POST or PUT requests.
 *
 * @async
 * @function authFetch
 * @param {string} url - The URL to send the request to.
 * @param {Object} [options={}] - Optional fetch options (e.g., method, body).
 * @returns {Promise<Response>} The fetch response.
 *
 * @example
 * const response = await authFetch("https://api.example.com/posts", { method: "GET" });
 * const data = await response.json();
 * console.log('Data fetched:', data);
 */
export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(Boolean(options.body)),
  });
}

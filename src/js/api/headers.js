import { API_KEY } from "./constants";
import { load } from "./storage/load";

/**
 * Generates headers for a fetch request.
 * Includes authorization and API key if available.
 *
 * @function headers
 * @param {boolean} [hasBody=false] - Whether the request will include a body, in which case the Content-Type is set.
 * @returns {Headers} The generated headers.
 *
 * @example
 * const fetchHeaders = headers(true); // For a POST request
 * console.log('Headers:', fetchHeaders);
 */
export function headers(hasBody = false) {
  const headers = new Headers();

  const token = load("token");

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (hasBody) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
}

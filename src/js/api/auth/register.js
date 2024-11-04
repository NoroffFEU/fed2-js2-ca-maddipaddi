import { API_AUTH_REGISTER } from "../constants";
import { authFetch } from "../authFetch";
import { handleErrors } from "../../utilities/handleErrors";

/**
 * Registers a new user by sending the provided details to the API.
 *
 * @async
 * @function register
 * @param {Object} userDetails - The user's registration details.
 * @param {string} userDetails.name - The user's name.
 * @param {string} userDetails.email - The user's email address.
 * @param {string} userDetails.password - The user's password.
 * @param {string} [userDetails.bio] - The user's bio (optional).
 * @param {string} [userDetails.banner] - The user's banner image URL (optional).
 * @param {string} [userDetails.avatar] - The user's avatar image URL (optional).
 * @returns {Promise<Object>} The API response containing user data if registration is successful.
 * @throws {Error} Will throw an error if the API request fails or the response is invalid.
 *
 * @example
 * const newUser = {
 *   name: "John Wick",
 *   email: "johnwick@noroff.no",
 *   password: "password123",
 *   bio: "Semi-retired assassin",
 *   banner: "https://example.com/banner.jpg",
 *   avatar: "https://example.com/avatar.jpg"
 * };
 *
 * register(newUser)
 *   .then(data => console.log('User registered:', data))
 *   .catch(error => console.error('Registration failed:', error.message));
 */
export async function register({ name, email, password, bio, banner, avatar }) {
  const response = await authFetch(API_AUTH_REGISTER, {
    method: "POST",
    body: JSON.stringify({ name, email, password, bio, banner, avatar }),
  });

  if (response.ok) {
    return await response.json();
  } else {
    handleErrors();
  }
}

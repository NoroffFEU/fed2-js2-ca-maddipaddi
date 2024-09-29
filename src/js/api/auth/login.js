import { handleErrors } from "../../utilities/handleErrors";
import { authFetch } from "../authFetch";
import { API_AUTH_LOGIN } from "../constants";
import { save } from "../storage/save";


/**
 * Logs a user in by sending their email and password to the authentication API.
 * If the login is successful, it saves the user's token and profile to storage.
 * If the login fails, it handles the error.
 * 
 * @async
 * @function login
 * @param {Object} credentials - The user's login credentials.
 * @param {string} credentials.email - The user's email address.
 * @param {string} credentials.password - The user's password.
 * @returns {Promise<Object>} The user's profile information if the login is successful.
 * @throws {Error} Will throw an error if the login request fails.
 * 
 * @example
 * const credentials = {
 *   email: "johnwick@noroff.no",
 *   password: "password123"
 * };
 * 
 * login(credentials)
 * .then(profile => console.log("User logged in: ", profile))
 *   .catch(error => console.error("Login failed: ", error.message)); 
 */
export async function login({ email, password }) {
 
        const response = await authFetch(API_AUTH_LOGIN, {
            method: "POST",
            body: JSON.stringify({email, password})
            });

            if (response.ok) {
                const { accessToken, ...profile } = (await response.json()).data; 
                save("token", accessToken);
                save("profile", profile);
                return profile;
            } else {
                await handleErrors(response);
            }
}
 

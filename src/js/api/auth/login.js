import { handleErrors } from "../../utilities/handleErrors";
import { authFetch } from "../authFetch";
import { API_AUTH_LOGIN } from "../constants";
import { save } from "../storage/save";

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
 

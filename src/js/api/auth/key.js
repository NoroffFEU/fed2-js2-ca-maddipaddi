/* import { authFetch } from "../authFetch"
import { API_AUTH_KEY } from "../constants"

export async function getKey(name) {
    const response = await authFetch (API_AUTH_KEY, {
        method: "POST",
        body: JSON.stringify({
            name: "Social Key"
        })
    });

    if(response.ok) {
        await response.json();
    }

    console.error(await response.json());
    throw new Error("Could not register for an API key");
    
} */


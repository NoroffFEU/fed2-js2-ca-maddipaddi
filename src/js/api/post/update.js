import { displayMessage } from "../../ui/global/displayMessage";
import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";

export async function updatePost(id, { title, body, tags, media }) {
    if (!id) {
        throw new Error("Update requires a post ID");
    }

    const response = await authFetch(`${API_SOCIAL_POSTS}/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, body, tags, media })
    })

    if (response.ok) {
        displayMessage("Post updated successfully!", "success");
    } else {
        throw new Error("Failed to update the post");
    }

    return await response.json();
}

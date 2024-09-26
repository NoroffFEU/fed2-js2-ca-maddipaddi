import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";

export async function deletePost(id) {
    if (!id) {
        throw new Error("Delete requires a post id");
    }

    await authFetch(`${API_SOCIAL_POSTS}/${id}`, {
        method: "DELETE"
    })
}

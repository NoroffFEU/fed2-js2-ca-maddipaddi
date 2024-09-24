import { displayMessage } from "../../ui/global/displayMessage";
import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";

export async function createPost({ title, body, tags, media }) {
    const response = await authFetch(API_SOCIAL_POSTS, {
        method: "POST",
        body: JSON.stringify({ title, body, tags, media })
    })

    if (response.ok) {
        return displayMessage("Post has been created successfully!", "success");
    }

    throw new Error("Could not create post");
    
}

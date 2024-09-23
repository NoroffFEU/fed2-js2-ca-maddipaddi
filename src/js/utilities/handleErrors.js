export function handleErrors(response) {
    if (!response.ok) {
        if (response.status === 400) {
            throw new Error("Invalid email or password. Please try again.");
        } else if (response.status === 401) {
            throw new Error("Invalid email or password. Please try again.");
        } else if (response.status === 403) {
            throw new Error("You do not have permission to access this resource.");
        } else if (response.status === 404) {
            throw new Error("The requested resource was not found.");
        } else if (response.status === 429) {
            throw new Error("You're sending too many requests. Please try again later.");
        } else if (response.status === 503) {
            throw new Error("The server is currently unavailable. Please try again later.");
        } else {
            throw new Error("An unexpected error occurred. Please try again later.");
        }
    }

    return response;
}
export function findPostID() {
    const urlParams = new URLSearchParams(window.location.search);
    const postID = urlParams.get("id");
    return postID; 
}
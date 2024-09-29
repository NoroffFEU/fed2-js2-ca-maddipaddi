
/**
 * Redirects or reloads the page after a post is deleted based on the current URL path.
 * If the user is viewing a single post, they are redirected to the home page.
 * If the user is viewing posts on their profile or the home page, the page is reloaded.
 * 
 * @function redirectAfterDeletion
 * @returns {void}
 * 
 * @example
 * // Call this function after deleting a post to handle the page redirection.
 * redirectAfterDeletion();
 */
export const redirectAfterDeletion = () => {
    const currentPath = window.location.pathname;

    if (currentPath.includes("/post/")) {
        window.location.href = "/";
    } else if (currentPath.includes("/profile/")) {
        window.location.reload();
    } else {
        window.location.reload();
    }
};

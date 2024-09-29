
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

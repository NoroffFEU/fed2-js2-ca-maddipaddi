export function showSpinner() {
    const spinner = document.getElementById("loading-spinner");
    spinner.style.display = "block";
}

export function hideSpinner() {
    const spinner = document.getElementById("loading-spinner");
    spinner.style.display = "none";
}
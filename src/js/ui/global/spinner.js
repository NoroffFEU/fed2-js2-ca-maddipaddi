/**
 * Displays the loading spinner by setting its display style to "block".
 * 
 * @function showSpinner
 * @returns {void}
 * 
 */
export function showSpinner() {
    const spinner = document.getElementById("loading-spinner");
    spinner.style.display = "block";
}

/**
 * Hides the loading spinner by setting its display style to "none".
 * 
 * @function hideSpinner
 * @returns {void}
 * 
 */
export function hideSpinner() {
    const spinner = document.getElementById("loading-spinner");
    spinner.style.display = "none";
}
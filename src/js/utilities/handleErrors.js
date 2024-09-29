/**
 * Handles API errors by checking the response and throwing an error if the request failed.
 * If the response contains error messages, it extracts and throws the first one.
 * 
 * @async
 * @function handleErrors
 * @param {Response} response - The fetch API response object.
 * @returns {Promise<Response>} The original response if no error occurred.
 * @throws {Error} Will throw an error if the response is not successful.
 * 
 * @example
 * const response = await fetch("https://api.example.com/data");
 * await handleErrors(response);
 * 
 */
export async function handleErrors(response) {
    if (!response.ok) {
     
        const errorData = await response.json();

        const errorMessage = errorData.errors && errorData.errors.length > 0
            ? errorData.errors[0].message  
            : "An unexpected error occurred. Please try again later."; 

       
        throw new Error(errorMessage);
    }

    return response; 
}
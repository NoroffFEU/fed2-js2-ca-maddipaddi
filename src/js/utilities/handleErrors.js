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
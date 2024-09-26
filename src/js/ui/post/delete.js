import { deletePost } from "../../api/post/delete";


export async function onDeletePost(event) {
    event.preventDefault(); 
    const redirectAfterDeletion = () => {
        const checkForContent = () => {
            const posts = document.querySelectorAll(".post-element");
            return posts;
        } 
    
        const result = checkForContent? window.location.href = "/" : window.location.reload(); 
        return result;
    }
     
    const deleteButton = event.target;
    const postId = deleteButton.getAttribute("id");
  
   try {
    await deletePost(postId);
   
  
   } catch (error) {
    throw new Error("The post could not be deleted.");
   }
   
    alert("The post was deleted");
    redirectAfterDeletion();
}


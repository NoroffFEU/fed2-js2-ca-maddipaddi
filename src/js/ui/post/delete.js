import { deletePost } from "../../api/post/delete";
import { redirectAfterDeletion } from "../../utilities/redirectAfterDeletionOfPost";


export async function onDeletePost(event) {
    event.preventDefault(); 
     
    const deleteButton = event.target;
    const postId = deleteButton.getAttribute("id");
  
   try {
    await deletePost(postId);
    alert("The post was deleted");
    redirectAfterDeletion();
  
   } catch (error) {
    throw new Error("The post could not be deleted.");
   }
  
}


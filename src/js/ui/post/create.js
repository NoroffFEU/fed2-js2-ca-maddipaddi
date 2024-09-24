import { createPost } from "../../api/post/create";
import { setMediaObject } from "../../utilities/setMediaObject";
import { stringToArray } from "../../utilities/stringToArray";
import { displayMessage } from "../global/displayMessage";

export async function onCreatePost(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    const tagsAsArray = stringToArray(formValues.tags);
    const mediaAsObject = setMediaObject(formValues.mediaURL, formValues.mediaALT);
   
    const postData = {
       title: formValues.title,
       media: mediaAsObject,
       body: formValues.body,
       tags: tagsAsArray
   }

    try {
        await createPost(postData); 
    } catch (error) {
        displayMessage(error.message, "error");
    }
}


import { API_AUTH_REGISTER } from "../constants";
import { authFetch } from "../authFetch";
import { handleErrors } from "../../utilities/handleErrors";
import { displayMessage } from "../../ui/global/displayMessage";

export async function register({
  name,
  email,
  password,
  bio,
  banner,
  avatar,
}) {
    const response = await authFetch(API_AUTH_REGISTER, {
    method: "POST",
    body: JSON.stringify({name, email, password, bio, banner, avatar})
    });
  
      if (response.ok) {
      return await response.json();
      } else {
      handleErrors();
      }
}

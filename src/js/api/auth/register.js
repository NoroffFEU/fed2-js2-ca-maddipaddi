import { API_AUTH_REGISTER } from "../constants";
import { authFetch } from "../authFetch";

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
  }

  throw new Error("The account could not be registered.")
}

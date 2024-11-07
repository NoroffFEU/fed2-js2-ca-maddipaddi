import { load } from "../api/storage/load";

export function getUserPhoto() {
  const userImage = document.getElementById("user-image");
  const profile = load("profile");

  userImage.setAttribute("src", profile.avatar.url);

  return;
}

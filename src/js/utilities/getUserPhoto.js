import { load } from "../api/storage/load";

export function getUserPhoto() {
  const userImage = document.getElementById("user-image");
  const profileImage = document.getElementById("profile-image");
  const profile = load("profile");

  userImage.setAttribute("src", profile.avatar.url);

  if (profileImage) {
    profileImage.setAttribute("src", profile.avatar.url);
  }

  return;
}

import { load } from "../api/storage/load";

export function getUserName() {
  const userName = document.getElementById("user-name");
  const profile = load("profile");

  userName.innerHTML += `${profile.name}`;

  return;
}

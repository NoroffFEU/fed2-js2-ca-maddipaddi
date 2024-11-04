import { load } from "../../api/storage/load";

/**
 * Renders the profile page for the current user by loading the profile data and displaying the user's name.
 *
 * @function profileTemplate
 * @returns {Element} The profile container element with the user's profile information.
 *
 */
export function profileTemplate() {
  const profileContainer = document.getElementById("profile-container");
  const profile = load("profile");

  const user = document.createElement("h2");
  user.innerText = `Welcome to ${profile.name}'s page`;

  profileContainer.appendChild(user);

  return profileContainer;
}

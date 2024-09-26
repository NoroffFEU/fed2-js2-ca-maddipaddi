import { load } from "../../api/storage/load";

export function profileTemplate() {
    
    const profileContainer = document.getElementById("profile-container");
    const profile = load("profile");

    const user = document.createElement("h2");
    user.innerText = `Welcome to ${profile.name}'s page`;

    profileContainer.appendChild(user);

    return profileContainer;
}

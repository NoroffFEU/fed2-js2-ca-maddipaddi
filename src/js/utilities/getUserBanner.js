import { load } from "../api/storage/load";

export function getUserBanner() {
  const profile = load("profile");

  const imageUrl = profile.banner.url;
  const userBanner = document.getElementById("user-banner");
  userBanner.style.backgroundImage = `url(${imageUrl})`;

  return;
}

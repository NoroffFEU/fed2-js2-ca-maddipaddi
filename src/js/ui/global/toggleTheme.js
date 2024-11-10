export function toggleTheme() {
  const html = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeToggleLabel = document.getElementById("themeToggleLabel");
  const logo = document.getElementById("logo");
  const lightLogoSrc = "/assets/logo-light-text.png";
  const darkLogoSrc = "/assets/logo-dark-text.png";

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    html.setAttribute("data-bs-theme", savedTheme);
    themeToggleLabel.textContent = savedTheme === "dark" ? "Day" : "Night";
    logo.src = savedTheme === "dark" ? darkLogoSrc : lightLogoSrc;
  } else {
    html.setAttribute("data-bs-theme", "dark");
    themeToggleLabel.textContent = "Day";
    logo.src = darkLogoSrc;
  }

  themeToggle.addEventListener("click", function () {
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggleLabel.textContent = newTheme === "dark" ? "Day" : "Night";
    logo.src = newTheme === "dark" ? darkLogoSrc : lightLogoSrc;
  });
}

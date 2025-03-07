function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".menu-btn");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close the menu when a link is clicked
const menuLinks = document.querySelectorAll(".menu-links a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu(); // Close the menu
  });
});
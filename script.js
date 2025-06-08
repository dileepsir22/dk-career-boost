// Toggle mobile menu open/close
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dropdown for mobile - Courses main dropdown
const coursesDropdownToggle = document.querySelector(".dropdown-toggle");
const coursesDropdownMenu = document.querySelector(".dropdown-menu");

coursesDropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  coursesDropdownMenu.classList.toggle("active");
});

// Dropdown-sub toggles (for submenu items)
const submenuToggles = document.querySelectorAll(".submenu-toggle");

submenuToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    // Find the subsubmenu for this toggle
    const subsubmenu = toggle.nextElementSibling;
    if (subsubmenu) {
      subsubmenu.classList.toggle("active");
    }
  });
});

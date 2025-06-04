// script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Dropdown toggle on click (for mobile)
document.querySelectorAll(".dropdown > a").forEach(drop => {
  drop.addEventListener("click", function (e) {
    e.preventDefault();
    const dropdownMenu = this.nextElementSibling;
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    } else {
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.style.display = "none"; // close others
      });
      dropdownMenu.style.display = "block";
    }
  });
});

// Close dropdowns when clicking outside
window.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
      menu.style.display = "none";
    });
  }
});

// Console log
console.log("Responsive JS for DK Career Boost loaded.");


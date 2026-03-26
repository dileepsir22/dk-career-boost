// ===== MOBILE TOGGLE =====
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ===== DROPDOWN TOGGLE (ALL DROPDOWNS) =====
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const menu = toggle.nextElementSibling;
      menu.classList.toggle("active");
    }
  });
});

// ===== SUBMENU TOGGLE =====
const submenuToggles = document.querySelectorAll(".submenu-toggle");

submenuToggles.forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const submenu = toggle.nextElementSibling;
      submenu.classList.toggle("active");
    }
  });
});

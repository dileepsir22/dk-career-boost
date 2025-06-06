document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});


// Toggle menu for mobile view
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("active");
});





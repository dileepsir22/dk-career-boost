document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Dropdown toggles for mobile
  const dropdownButtons = document.querySelectorAll('.dropbtn, .subdropbtn');

  dropdownButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);

      // Find next sibling dropdown menu or subsubmenu
      const dropdownMenu = btn.nextElementSibling;

      if (!dropdownMenu) return;

      dropdownMenu.classList.toggle('open');
    });
  });
});

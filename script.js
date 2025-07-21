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




import { supabase } from './supabaseClient.js';

const form = document.getElementById('signup-form');
const statusText = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const studentClass = document.getElementById('class').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Sign up with email
  const { data: signupData, error: signupError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signupError) {
    statusText.textContent = 'Signup failed: ' + signupError.message;
    return;
  }

  const user_id = signupData.user?.id;
  if (!user_id) {
    statusText.textContent = 'User ID not found after signup.';
    return;
  }

  // Insert student data into the database
  const { error: insertError } = await supabase
    .from('DK Career Boost Table')
    .insert([
      { user_id, name, class: studentClass }
    ]);

  if (insertError) {
    statusText.textContent = 'Error saving student info: ' + insertError.message;
  } else {
    statusText.textContent = 'Signup successful! Welcome, ' + name + '!';
    form.reset();
  }
});

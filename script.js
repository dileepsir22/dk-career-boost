// ================= MOBILE MENU =================
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ================= DROPDOWNS =================

// MAIN DROPDOWN
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const menu = toggle.nextElementSibling;
      if (menu) {
        menu.classList.toggle("active");
      }
    }
  });
});

// SUB DROPDOWN
const submenuToggles = document.querySelectorAll(".submenu-toggle");

submenuToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const submenu = toggle.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("active");
      }
    }
  });
});

// ================= SUPABASE =================
import { supabase } from './supabaseClient.js';

const form = document.getElementById('signup-form');
const statusText = document.getElementById('status');

if (form && statusText) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name')?.value;
    const studentClass = document.getElementById('class')?.value;
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;

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
}

// ================= NEWS BOX =================

// Click log + alert (combined to avoid duplicate listeners)
document.querySelectorAll(".news-box").forEach(box => {
  box.addEventListener("click", () => {
    console.log("News clicked:", box.innerText);
    alert("More details coming soon!");
  });
});

// News item click
document.querySelectorAll(".news-item").forEach(item => {
  item.addEventListener("click", () => {
    alert("Opening details...");
  });
});

import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const message = document.getElementById("login-message");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      message.style.color = "green";
      message.textContent = "Login successful!";
      // Redirect to dashboard.html if you have one
      // window.location.href = "dashboard.html";
    } catch (error) {
      message.textContent = error.message;
    }
  });
});

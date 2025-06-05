import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUm4232lt2pQTWSNsnyojrpmMTPKNU1r8",
  authDomain: "dk-career-boost.firebaseapp.com",
  projectId: "dk-career-boost",
  storageBucket: "dk-career-boost.appspot.com",
  messagingSenderId: "1020282426285",
  appId: "1:1020282426285:android:51202a9258041871540724"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = "";

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      messageDiv.className = "success-message";
      messageDiv.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    })
    .catch((error) => {
      messageDiv.className = "error-message";
      messageDiv.textContent = "Login failed: " + error.message;
    });
});

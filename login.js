import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const messageDiv = document.getElementById("message");

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    const docRef = doc(db, "students", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const studentData = docSnap.data();
      if (studentData.approved) {
        messageDiv.className = "success-message";
        messageDiv.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1000);
      } else {
        messageDiv.className = "error-message";
        messageDiv.textContent = "⏳ Waiting for admin approval.";
      }
    } else {
      messageDiv.className = "error-message";
      messageDiv.textContent = "❌ Profile not found.";
    }
  } catch (error) {
    messageDiv.className = "error-message";
    messageDiv.textContent = "Login failed: " + error.message;
  }
});

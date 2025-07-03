import { auth, db, storage } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";

const adminEmail = "dkcareerboost@gmail.com";

function generateStudentID() {
  return "STU" + Math.floor(Math.random() * 10000000);
}

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fullName = document.getElementById("fullName").value;
  const gender = document.getElementById("gender").value;
  const studentClass = document.getElementById("studentClass").value;
  const dob = document.getElementById("dob").value;
  const mobile = document.getElementById("mobile").value;
  const address = document.getElementById("address").value;
  const photoFile = document.getElementById("photo").files[0];

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    const studentID = generateStudentID();

    const photoRef = ref(storage, `students/${uid}/profile.jpg`);
    await uploadBytes(photoRef, photoFile);
    const photoURL = await getDownloadURL(photoRef);

    await setDoc(doc(db, "students", uid), {
      email,
      fullName,
      gender,
      studentClass,
      dob,
      mobile,
      address,
      studentID,
      photoURL,
      approved: email === adminEmail ? true : false
    });

    alert("🎉 Signup successful! Waiting for admin approval.");
    window.location.href = "login.html";
  } catch (error) {
    alert("❌ Error: " + error.message);
  }
});

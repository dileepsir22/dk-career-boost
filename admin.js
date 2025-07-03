import { auth, db } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const adminEmail = "dkcareerboost@gmail.com";
const loginSection = document.getElementById("loginSection");
const studentSection = document.getElementById("studentSection");
const studentTableBody = document.getElementById("studentTableBody");

onAuthStateChanged(auth, async (user) => {
  if (user && user.email === adminEmail) {
    loginSection.style.display = "none";
    studentSection.style.display = "block";
    await loadStudents();
  } else {
    loginSection.style.display = "block";
    studentSection.style.display = "none";
  }
});

document.getElementById("adminLoginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (userCredential.user.email !== adminEmail) {
      alert("Access denied. Only admin can login.");
    } else {
      loginSection.style.display = "none";
      studentSection.style.display = "block";
      await loadStudents();
    }
  } catch (err) {
    alert("Login failed: " + err.message);
  }
});

async function loadStudents() {
  studentTableBody.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "students"));
  querySnapshot.forEach((docSnap) => {
    const student = docSnap.data();
    const row = document.createElement("tr");
    row.innerHTML = `
      <td data-label="Name">${student.fullName}</td>
      <td data-label="Email">${student.email}</td>
      <td data-label="Approved">${student.approved ? "Yes" : "No"}</td>
      <td data-label="Actions">
        <button onclick="approveStudent('${docSnap.id}')">Approve</button>
        <button onclick="deleteStudent('${docSnap.id}')">Delete</button>
      </td>
    `;
    studentTableBody.appendChild(row);
  });
}

window.approveStudent = async function (uid) {
  const studentRef = doc(db, "students", uid);
  await updateDoc(studentRef, {
    approved: true
  });
  await loadStudents();
};

window.deleteStudent = async function (uid) {
  const studentRef = doc(db, "students", uid);
  await deleteDoc(studentRef);
  await loadStudents();
};

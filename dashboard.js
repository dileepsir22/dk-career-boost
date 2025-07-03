// ✅ dashboard.js import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js"; import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"; import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = { apiKey: "AIzaSyDsMkUMvY8IkJCVJdTVc8E8C63tLZDt_nE", authDomain: "dk-career-boost-final.firebaseapp.com", projectId: "dk-career-boost-final", storageBucket: "dk-career-boost-final.appspot.com", messagingSenderId: "181255535409", appId: "1:181255535409:web:bc1e65d0456be6b2b173b6" };

const app = initializeApp(firebaseConfig); const auth = getAuth(app); const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => { if (!user) { window.location.href = "login.html"; } else { const docRef = doc(db, "students", user.uid); const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  const data = docSnap.data();
  document.getElementById("studentName").textContent = data.fullName;
  document.getElementById("name").textContent = data.fullName;
  document.getElementById("gender").textContent = data.gender;
  document.getElementById("class").textContent = data.studentClass;
  document.getElementById("dob").textContent = data.dob;
  document.getElementById("mobile").textContent = data.mobile;
  document.getElementById("email").textContent = data.email;
  document.getElementById("address").textContent = data.address;
  document.getElementById("id").textContent = data.studentID;
  document.getElementById("photo").src = data.photoURL;
} else {
  alert("Profile not found!");
}

} });

document.getElementById("logout").addEventListener("click", () => { signOut(auth).then(() => { window.location.href = "login.html"; }); });


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsMkUMvY8IkJCVJdTVc8E8C63tLZDt_nE",
  authDomain: "dk-career-boost-final.firebaseapp.com",
  projectId: "dk-career-boost-final",
  storageBucket: "dk-career-boost-final.appspot.com",
  messagingSenderId: "181255535409",
  appId: "1:181255535409:web:bc1e65d0456be6b2b173b6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };

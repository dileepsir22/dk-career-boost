import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";

const firebaseConfig = {
      apiKey: "AIzaSyAUm4232lt2pQTWSNsnyojrpmMTPKNU1r8",
      authDomain: "dk-career-boost.firebaseapp.com",
      projectId: "dk-career-boost",
      storageBucket: "dk-career-boost.appspot.com",
      messagingSenderId: "1020282426285",
      appId: "1:1020282426285:android:51202a9258041871540724"
    };

    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };

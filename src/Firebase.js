import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { getFirestore, collection, getDocs,addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAZQX_OgomFQDS0HZ96zhf1in5oPvrlZjI",
  authDomain: "facebook-clone-9e0b4.firebaseapp.com",
  projectId: "facebook-clone-9e0b4",
  storageBucket: "facebook-clone-9e0b4.appspot.com",
  messagingSenderId: "927052486724",
  appId: "1:927052486724:web:610a2f0e038ab466470411",
  measurementId: "G-RDTKSSLL9C",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };
export { db, collection, getDocs, addDoc };

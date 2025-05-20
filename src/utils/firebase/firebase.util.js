// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import Firebase Auth libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzTlntQdVwy_N2lpQ9j9et5Yj83_rpzjM",
    authDomain: "ztm-coms.firebaseapp.com",
    projectId: "ztm-coms",
    storageBucket: "ztm-coms.firebasestorage.app",
    messagingSenderId: "822735859672",
    appId: "1:822735859672:web:fc78ececc92965b7f28cad"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2d2nQfyopIMOeVfcpOyE2wPwzwWCfKgQ",
    authDomain: "portfolio-974bd.firebaseapp.com",
    projectId: "portfolio-974bd",
    storageBucket: "portfolio-974bd.appspot.com",
    messagingSenderId: "673552499854",
    appId: "1:673552499854:web:eff1535766c1061bcaf5df",
    measurementId: "G-0SPFXG0XZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
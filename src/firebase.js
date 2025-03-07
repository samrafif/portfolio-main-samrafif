// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5CLSsI0oSIMkfdKQ8q0n4LWoU72Jf_YI",
  authDomain: "personalportfolio-idn-kx-p01.firebaseapp.com",
  projectId: "personalportfolio-idn-kx-p01",
  storageBucket: "personalportfolio-idn-kx-p01.appspot.com",
  messagingSenderId: "608507997642",
  appId: "1:608507997642:web:51e1676c9cd51179fbf333",
  measurementId: "G-J1FL0WDTC4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
// TODO: deal with this later
const analytics = getAnalytics(app);

import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function checkLoggedIn() {
  return auth.currentUser != null;
}

export function getCurrentUser() {
  return auth.currentUser;
}

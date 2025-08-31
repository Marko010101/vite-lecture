import { getAuth, onAuthStateChanged } from "firebase/auth";
const h1 = document.getElementById("helloText");

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user);
  } else {
    // User is signed out
    // ...
  }
});

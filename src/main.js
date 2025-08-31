import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";

const submitButton = document.getElementById("submitButton");
const email = document.getElementById("email");
const form = document.querySelector("form");
const password = document.getElementById("password");
const displayText = document.getElementById("displayText");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const { value: emailVal } = email;
//   const { value: passwordVal } = password;
//   console.log(emailVal, passwordVal);
//   if (emailVal && passwordVal)
//     createUserWithEmailAndPassword(auth, emailVal, passwordVal)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         displayText.className = "text-green-500";
//         displayText.textContent = "You have succesfully registered!";
//         console.log("user", user);
//       })
//       .catch((error) => {
//         displayText.textContent = error.message;
//       });
// });

// async function getAllPosts() {
//   const querySnapshot = await getDocs(collection(db, "posts"));

//   const allPosts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

//   console.log(allPosts);
//   return allPosts;
// }

// getAllPosts();

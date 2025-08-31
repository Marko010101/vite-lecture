import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4Ac5T-GKC2cD1m_wjt_jQDRbDTK1L-Ao",
  authDomain: "user-registration-f5291.firebaseapp.com",
  projectId: "user-registration-f5291",
  storageBucket: "user-registration-f5291.firebasestorage.app",
  messagingSenderId: "605200855272",
  appId: "1:605200855272:web:c9902d154f9a788287d95d",
  measurementId: "G-H00E3R6477",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

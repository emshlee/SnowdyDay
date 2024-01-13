
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHPzZrrN1mDdLhBHYrypHrrjGsUhJi0xE",
  authDomain: "snowdyday-da534.firebaseapp.com",
  projectId: "snowdyday-da534",
  storageBucket: "snowdyday-da534.appspot.com",
  messagingSenderId: "213889856714",
  appId: "1:213889856714:web:347fd527cff51fae8cb033",
  databaseURL: "https://snowdyday-da534-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// export const database = getDatabase(app);
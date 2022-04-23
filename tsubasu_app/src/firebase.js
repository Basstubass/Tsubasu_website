// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzbI4r3BWRHbi0CiXOvjrK-wdf5wDUnVs",
  authDomain: "tsubasu-website.firebaseapp.com",
  projectId: "tsubasu-website",
  storageBucket: "tsubasu-website.appspot.com",
  messagingSenderId: "442561649076",
  appId: "1:442561649076:web:e01a626b570b0a328cbae1",
  measurementId: "G-459LZTZ4DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
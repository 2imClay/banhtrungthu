// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7pFEd6XcH4pAqpnryHfcn7obSDVUIIyY",
  authDomain: "banhtrungthu-89b4f.firebaseapp.com",
  projectId: "banhtrungthu-89b4f",
  storageBucket: "banhtrungthu-89b4f.appspot.com",
  messagingSenderId: "542263413479",
  appId: "1:542263413479:web:91f649b5704853e40e3042",
  measurementId: "G-JDDLP3ZPF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
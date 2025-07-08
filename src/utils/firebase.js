// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7cHDawae_MyFzSIEXHDDqFc6Alu_fBp0",
  authDomain: "netflixgpt-d406f.firebaseapp.com",
  projectId: "netflixgpt-d406f",
  storageBucket: "netflixgpt-d406f.firebasestorage.app",
  messagingSenderId: "457770327253",
  appId: "1:457770327253:web:987cf54ec3f203baa9965c",
  measurementId: "G-59NV2BPJLV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

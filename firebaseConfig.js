import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEfGEtsAR6cD3GJpcbLMCivZOc72otbVI",
  authDomain: "authntication-e22bf.firebaseapp.com",
  projectId: "authntication-e22bf",
  storageBucket: "authntication-e22bf.appspot.com", // Fix the storage bucket domain
  messagingSenderId: "748503619109",
  appId: "1:748503619109:web:caa76fd793f3e2d68611cc",
  measurementId: "G-GBNP7K6M6W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export { app };

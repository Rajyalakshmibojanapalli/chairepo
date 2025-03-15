import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqI9mC1kdF-Xu9jjiGcGZ6Y2T7jdGDWs4",
  authDomain: "inu-choose-int-education.firebaseapp.com",
  projectId: "inu-choose-int-education",
  storageBucket: "inu-choose-int-education.firebasestorage.app",
  messagingSenderId: "962618782382",
  appId: "1:962618782382:web:d935342096f8d420d8733f",
  measurementId: "G-CHXQHSWNSL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };

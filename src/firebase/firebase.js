// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBhZHP34tv7H0DUKQFHo6cb_aWiNi89FE",
  authDomain: "resourcemanagement-de7ad.firebaseapp.com",
  projectId: "resourcemanagement-de7ad",
  storageBucket: "resourcemanagement-de7ad.appspot.com",
  messagingSenderId: "414322375773",
  appId: "1:414322375773:web:4022fa7a70d648faf6e1b4",
  measurementId: "G-D5YJCBWBTR"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
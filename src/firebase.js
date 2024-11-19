import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyARbB53rp7BJqF2kMD58gW62PfV2W0NrWc",
  // authDomain: "st-project-react.firebaseapp.com",
  // projectId: "st-project-react",
  // storageBucket: "st-project-react.firebasestorage.app",
  // messagingSenderId: "552023667608",
  // appId: "1:552023667608:web:13d6f0aec20042662271ed",

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6ieazYo8Zr4C-IY8tTdp6MQG8hPxFH78",
    authDomain: "leader-tex.firebaseapp.com",
    projectId: "leader-tex",
    storageBucket: "leader-tex.appspot.com",
    messagingSenderId: "993646551534",
    appId: "1:993646551534:web:58d8fb1e78ded186722eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
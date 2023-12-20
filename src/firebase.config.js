// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKnbx7OukGSUPXwZ5xJme4Yoo2VkE_oOU",
  authDomain: "taskmanagement-client.firebaseapp.com",
  projectId: "taskmanagement-client",
  storageBucket: "taskmanagement-client.appspot.com",
  messagingSenderId: "154137372813",
  appId: "1:154137372813:web:1ff651523aceea52741ac4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
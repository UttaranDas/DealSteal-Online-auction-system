// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8fwVcnQ8UU1eneLFpzseqfj3e_TpzAck",
  authDomain: "online-auction-system-b0dc5.firebaseapp.com",
  projectId: "online-auction-system-b0dc5",
  storageBucket: "online-auction-system-b0dc5.appspot.com",
  messagingSenderId: "77490244258",
  appId: "1:77490244258:web:1f982fa5673418ed0fe5fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
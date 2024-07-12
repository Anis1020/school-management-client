// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgsz-T4ueEWTT_Y3gzrbYQTkFRVb6aS_I",
  authDomain: "school-management-2968d.firebaseapp.com",
  projectId: "school-management-2968d",
  storageBucket: "school-management-2968d.appspot.com",
  messagingSenderId: "171768129256",
  appId: "1:171768129256:web:af24e88ffdaf123db54b5d",
};
//const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

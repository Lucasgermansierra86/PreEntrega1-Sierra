
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCjmMFpLTHozvE8VZwtFDiWYk-gbvd0cAk",
  authDomain: "proyecto-react-de086.firebaseapp.com",
  projectId: "proyecto-react-de086",
  storageBucket: "proyecto-react-de086.appspot.com",
  messagingSenderId: "1026597326140",
  appId: "1:1026597326140:web:8e110b219eadf9237ee239"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

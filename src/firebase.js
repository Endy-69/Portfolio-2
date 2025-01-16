import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
//   authDomain: "portofolio-web-3e8e8.firebaseapp.com",
//   projectId: "portofolio-web-3e8e8",
//   storageBucket: "portofolio-web-3e8e8.appspot.com",
//   messagingSenderId: "25195509306",
//   appId: "1:25195509306:web:2b635dcf997137bf612703"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCuP7fN-LGUDV56az7_gbTWji7AYhpSzVY",
  authDomain: "portfolio-46254.firebaseapp.com",
  databaseURL: "https://portfolio-46254-default-rtdb.firebaseio.com",
  projectId: "portfolio-46254",
  storageBucket: "portfolio-46254.firebasestorage.app",
  messagingSenderId: "810949437317",
  appId: "1:810949437317:web:4a72050767142ae48006ec",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
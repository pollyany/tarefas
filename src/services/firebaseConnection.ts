import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjXZwi9tUi_75xJa-kBILcYXBvZRkJceI",
  authDomain: "tarefasplus-f246e.firebaseapp.com",
  projectId: "tarefasplus-f246e",
  storageBucket: "tarefasplus-f246e.appspot.com",
  messagingSenderId: "547261962912",
  appId: "1:547261962912:web:21e2a305bfeb087356c7c5"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export {db}
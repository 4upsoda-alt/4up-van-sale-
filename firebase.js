import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPO0fTwFJdiLdWf4g6zSnV54PEiyfIUtY",
  authDomain: "up-van-sale.firebaseapp.com",
  projectId: "up-van-sale",
  storageBucket: "up-van-sale.firebasestorage.app",
  messagingSenderId: "789365465007",
  appId: "1:789365465007:web:23115c09592e10dc98d95a",
  measurementId: "G-ZT0DLFE99C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;

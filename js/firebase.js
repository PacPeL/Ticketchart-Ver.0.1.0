// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set, get, update, child } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCaltegzGm8ikz2vKKYbm6mabiA4hWF_bM",
  authDomain: "ticketchair-44af8.firebaseapp.com",
  databaseURL: "https://ticketchair-44af8-default-rtdb.firebaseio.com",
  projectId: "ticketchair-44af8",
  storageBucket: "ticketchair-44af8.firebasestorage.app",
  messagingSenderId: "292933584651",
  appId: "1:292933584651:web:d84a36079d3506e0e5840e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, update, child };

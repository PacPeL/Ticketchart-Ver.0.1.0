import { db, ref, get, child } from "./firebase.js";


const currentUser = localStorage.getItem("currentUser");
if (currentUser) {
  window.location = "profile.html";
}


document.getElementById("loginBtn").addEventListener("click", async () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) return alert("Please enter username and password");

  const userRef = ref(db);
  const snapshot = await get(child(userRef, "users/" + username));

  if (!snapshot.exists()) {
    alert("User not found");
  } else if (snapshot.val().password !== password) {
    alert("Incorrect password");
  } else {
    localStorage.setItem("currentUser", username);
    window.location = "profile.html";
  }
});

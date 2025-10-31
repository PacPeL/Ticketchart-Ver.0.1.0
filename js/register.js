import { db, ref, set, get, child } from "./firebase.js";

document.getElementById("registerBtn").addEventListener("click", async () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) return alert("Please fill in all fields");

  const userRef = ref(db);
  const snapshot = await get(child(userRef, "users/" + username));

  if (snapshot.exists()) {
    alert("Username already exists!");
  } else {
    await set(ref(db, "users/" + username), {
      username: username,
      password: password,
      photo: ""
    });
    alert("Account created successfully!");
    window.location = "index.html";
  }
});

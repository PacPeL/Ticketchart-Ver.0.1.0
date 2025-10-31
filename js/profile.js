import { db, ref, get, update } from "./firebase.js";

const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const profileImage = document.getElementById("profileImage");
const profilePhotoInput = document.getElementById("profilePhoto");

const currentUser = localStorage.getItem("currentUser");
if (!currentUser) window.location = "index.html";

// Load user data
get(ref(db, "users/" + currentUser)).then(snapshot => {
  const data = snapshot.val();
  usernameField.value = data.username;
  if (data.photo) profileImage.src = data.photo;
});

profileImage.addEventListener("click", () => profilePhotoInput.click());

let newPhoto = "";
profilePhotoInput.addEventListener("change", () => {
  const file = profilePhotoInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    newPhoto = reader.result;
    profileImage.src = newPhoto;
  };
  reader.readAsDataURL(file);
});

document.getElementById("updateBtn").addEventListener("click", async () => {
  const newUsername = usernameField.value.trim();
  const newPassword = passwordField.value.trim();

  if (!newUsername) return alert("Username cannot be empty");

const updates = {
  username: newUsername,
};
if (newPassword) updates.password = newPassword;
if (newPhoto) updates.photo = newPhoto; // solo si hay una foto nueva

await update(ref(db, "users/" + currentUser), updates);


  alert("Profile updated!");
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location = "index.html";
});

// js/login.js

const auth = firebase.auth();

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // ✅ Login Success — Redirect
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("errorMessage").innerText = error.message;
    });
});

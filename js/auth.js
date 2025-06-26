// js/auth.js

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        document.getElementById("message").innerText = "Login successful!";
        console.log("Login successful:", userCredential.user.email);
        // Redirect to dashboard.html (later)
      })
      .catch((error) => {
        document.getElementById("message").innerText = error.message;
        console.error("Login error:", error);
      });
  }
  
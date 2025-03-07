// Import Firebase SDK (Only needed if using Firebase modules)
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaPInHNEm4CE9CuVZMlnCGnbCDXe_tEho",
  authDomain: "solandis-school.firebaseapp.com",
  projectId: "solandis-school",
  storageBucket: "solandis-school.appspot.com",
  messagingSenderId: "1059393990312",
  appId: "1:1059393990312:web:bcc1a18ef463b1335d9c9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Function
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Logged in successfully as " + userCredential.user.email);
        window.location.href = "dashboard.html"; // Redirect after login
    })
    .catch((error) => {
        alert(error.message);
    });
}

// Make function global so HTML can access it
window.login = login;

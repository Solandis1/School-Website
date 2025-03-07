// Import Firebase functions (ONLY if using a module system)
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaPInHNEm4CE9CuVZMlnCGnbCDXe_tEho",
  authDomain: "solandis-school.firebaseapp.com",
  projectId: "solandis-school",
  storageBucket: "solandis-school.appspot.com",
  messagingSenderId: "1059393990312",
  appId: "1:1059393990312:web:bcc1a18ef463b1335d9c9d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Function
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("Logged in successfully as " + userCredential.user.email);
        window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => {
        alert(error.message);
    });
}

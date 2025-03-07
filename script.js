// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Register a new user
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await auth.createUserWithEmailAndPassword(email, password);
        alert("Account created successfully!");
        window.location.href = "login.html";  // Redirect to login page
    } catch (error) {
        alert(error.message);
    }
});

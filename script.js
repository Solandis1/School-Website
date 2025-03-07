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
if (registerForm) {
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
}

// Login functionality
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            alert("Login successful!");
            window.location.href = "dashboard.html";  // Redirect to the dashboard after login
        } catch (error) {
            alert(error.message);
        }
    });
}

// Handle user session
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User is logged in", user);
        // Show the dashboard or user-specific content
    } else {
        console.log("No user is logged in");
        // Redirect to the login page if not logged in
        if (window.location.pathname !== "/login.html") {
            window.location.href = "login.html";
        }
    }
});

// Logout functionality
const logoutLink = document.getElementById("logoutLink");
if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
        e.preventDefault();
        firebase.auth().signOut()
            .then(() => {
                alert("You have logged out successfully!");
                window.location.href = "login.html";  // Redirect to the login page after logging out
            })
            .catch((error) => {
                alert("Error logging out: " + error.message);
            });
    });
}

// Show & Hide Sections
document.getElementById("show-login").addEventListener("click", function() {
    document.getElementById("signup-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
});

document.getElementById("show-signup").addEventListener("click", function() {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("signup-section").classList.remove("hidden");
});

// Sign-Up Logic
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (localStorage.getItem(email)) {
        document.getElementById("signup-message").textContent = "User already exists! Try logging in.";
        document.getElementById("signup-message").classList.remove("hidden");
        return;
    }

    // Store user data in local storage
    localStorage.setItem(email, JSON.stringify({ name: name, password: password }));

    document.getElementById("signup-form").reset();
    document.getElementById("signup-message").textContent = "Thank you for signing up! 🎧";
    document.getElementById("signup-message").classList.remove("hidden");
});

// Login Logic
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedUser = localStorage.getItem(email);
    if (storedUser) {
        let userData = JSON.parse(storedUser);
        if (userData.password === password) {
            document.getElementById("login-message").textContent = "Login successful! 🎶";
            document.getElementById("login-message").classList.remove("hidden");
            // Redirect or perform login action
        } else {
            document.getElementById("login-message").textContent = "Incorrect password!";
            document.getElementById("login-message").classList.remove("hidden");
        }
    } else {
        document.getElementById("login-message").textContent = "User not found! Please sign up.";
        document.getElementById("login-message").classList.remove("hidden");
    }
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Here you would typically handle the login logic (e.g., API call)
    /*console.log("Email:", email);
    console.log("Password:", password);*/

    // For demonstration, we will just alert the user
    /*alert("Login attempted with:\nEmail: " + email + "\nPassword: " + password);*/
});

// Event listeners for links
document.getElementById("signup").addEventListener("click", function () {
    alert("Redirecting to Sign Up page...");
});

document.getElementById("forgotPassword").addEventListener("click", function () {
    alert("Redirecting to Forgot Password page...");
});
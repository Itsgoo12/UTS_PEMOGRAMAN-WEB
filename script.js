// Data user valid
const validUser = {
    username: "admin",
    password: "admin123"
};

// Fungsi Login
function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    fetch("login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes("Login berhasil")) {
            alert("Login berhasil!");
            window.location.href = "menu.html";
        } else {
            alert(data);
        }
    })
    .catch(error => console.error("Error:", error));
}


// Fungsi Registrasi
function register(event) {
    event.preventDefault();

    const username = document.getElementById("register-username").value.trim();
    const password = document.getElementById("register-password").value;

    fetch("register.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes("Registrasi berhasil")) {
            alert("Registrasi berhasil! Silakan login.");
            window.location.href = "login.html";
        } else {
            alert(data);
        }
    })
    .catch(error => console.error("Error:", error));
}


// Fungsi Logout
function logout() {
    alert("Anda telah berhasil logout!");
    window.location.href = "login.html"; // Redirect ke halaman login
}

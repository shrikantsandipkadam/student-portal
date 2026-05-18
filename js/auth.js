// ================= BASE PATH HANDLER =================
function getBasePath() {
    // If inside /pages folder → go one level up
    if (window.location.pathname.includes("/pages/")) {
        return "../";
    }
    return "./";
}

// ================= LOGIN =================
function login(event) {
    if (event) {
        event.preventDefault();
    }
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    if (username === "" || password === "") {
        msg.textContent = "Please enter username and password.";
        return false;
    }

    const validPassword = "IITD123";
    if (password !== validPassword) {
        msg.textContent = "Invalid password.";
        return false;
    }

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);
    localStorage.setItem("currentUser", username);
    window.location.href = "index.html";
    return false;
}

// ================= CHECK LOGIN =================
function checkLogin() {
    let loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
        window.location.href = getBasePath() + "login.html";
    }
}

// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("username");

    window.location.href = getBasePath() + "login.html";
}

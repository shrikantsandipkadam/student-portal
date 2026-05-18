function checkLogin() {
    let loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
        if (window.location.pathname.includes("/pages/")) {
            window.location.href = "../login.html";
        } else {
            window.location.href = "login.html";
        }
    }
}
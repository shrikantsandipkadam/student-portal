function go(page) {
    window.location.href = page;
}

function getSidebarElements() {
    return {
        sidebar: document.getElementById("sidebar"),
        main: document.querySelector(".main"),
        overlay: document.querySelector(".sidebar-overlay")
    };
}

function applySidebarState() {
    const { sidebar, main } = getSidebarElements();
    if (!sidebar || !main) {
        return;
    }

    const isMobile = window.innerWidth <= 900;
    const storedState = localStorage.getItem("sidebarState");
    const shouldCollapse = storedState === "collapsed";

    if (isMobile) {
        sidebar.classList.remove("hide");
        sidebar.classList.toggle("open", storedState === "expanded");
        main.classList.remove("full");
        document.body.classList.toggle("sidebar-open", storedState === "expanded");
        return;
    }

    sidebar.classList.remove("open");
    sidebar.classList.toggle("hide", shouldCollapse);
    main.classList.toggle("full", shouldCollapse);
    document.body.classList.remove("sidebar-open");
}

function toggleSidebar() {
    const { sidebar, main } = getSidebarElements();
    if (!sidebar || !main) {
        return;
    }

    if (window.innerWidth <= 900) {
        const isOpen = sidebar.classList.toggle("open");
        document.body.classList.toggle("sidebar-open", isOpen);
        localStorage.setItem("sidebarState", isOpen ? "expanded" : "collapsed");
        return;
    }

    const isHidden = sidebar.classList.toggle("hide");
    main.classList.toggle("full", isHidden);
    localStorage.setItem("sidebarState", isHidden ? "collapsed" : "expanded");
}

function normalizePath(value) {
    return value.replace(/\\/g, "/").replace(/^\.\.\//, "").replace(/^\.\//, "");
}

function setActive() {
    const links = document.querySelectorAll(".nav-link");
    const currentPath = normalizePath(window.location.pathname);

    links.forEach((link) => {
        const href = normalizePath(link.getAttribute("href") || "");
        const isMatch = currentPath.endsWith(href);
        link.classList.toggle("active", isMatch);
    });
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    updateThemeButtons();
}

function loadTheme() {
    const theme = localStorage.getItem("theme");
    document.body.classList.toggle("dark", theme === "dark");
    updateThemeButtons();
}

function getCurrentUserName() {
    try {
        const storedProfile = JSON.parse(localStorage.getItem("studentProfile") || "{}");
        if (storedProfile.fullName) {
            return storedProfile.fullName;
        }
    } catch (error) {
    }

    return localStorage.getItem("currentUser") || localStorage.getItem("username") || "Student";
}

function populateUserContext() {
    const user = getCurrentUserName();
    const userFields = document.querySelectorAll("[data-user-name]");
    const welcomeFields = document.querySelectorAll("[data-welcome-name]");
    const initialFields = document.querySelectorAll("[data-user-initial]");

    userFields.forEach((field) => {
        field.textContent = user;
    });

    welcomeFields.forEach((field) => {
        field.textContent = user;
    });

    initialFields.forEach((field) => {
        field.textContent = user.trim().charAt(0).toUpperCase() || "S";
    });
}

function updateThemeButtons() {
    const isDark = document.body.classList.contains("dark");
    const buttons = document.querySelectorAll(".theme-btn");
    const cornerThemeButtons = document.querySelectorAll("[data-corner-theme]");

    buttons.forEach((button) => {
        button.textContent = isDark ? "Light Theme" : "Dark Theme";
    });

    cornerThemeButtons.forEach((button) => {
        button.textContent = isDark ? "Light" : "Dark";
        button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    });
}

function enhanceSidebar() {
    const sidebars = document.querySelectorAll(".sidebar");

    sidebars.forEach((sidebar) => {
        if (!sidebar || sidebar.querySelector(".sidebar-links")) {
            return;
        }

        const actions = sidebar.querySelector(".sidebar-actions");
        const linksCard = document.createElement("div");
        linksCard.className = "sidebar-links";
        linksCard.innerHTML = `
            <div class="sidebar-section-title">IITD Links</div>
            <div class="sidebar-links-grid">
                <a class="mini-link" href="https://home.iitd.ac.in/" target="_blank" rel="noopener noreferrer"><span class="mini-link-mark">HM</span><span>Home</span></a>
                <a class="mini-link" href="https://acad.iitd.ac.in/" target="_blank" rel="noopener noreferrer"><span class="mini-link-mark">AC</span><span>Academics</span></a>
                <a class="mini-link" href="https://library.iitd.ac.in/" target="_blank" rel="noopener noreferrer"><span class="mini-link-mark">LB</span><span>Library</span></a>
                <a class="mini-link" href="https://webmail.iitd.ac.in/" target="_blank" rel="noopener noreferrer"><span class="mini-link-mark">ML</span><span>Webmail</span></a>
            </div>
        `;

        if (actions) {
            sidebar.insertBefore(linksCard, actions);
        } else {
            sidebar.appendChild(linksCard);
        }
    });
}

function ensureSidebarOverlay() {
    if (document.querySelector(".sidebar-overlay")) {
        return;
    }

    const overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";
    overlay.addEventListener("click", function () {
        if (window.innerWidth > 900) {
            return;
        }

        const { sidebar } = getSidebarElements();
        if (sidebar) {
            sidebar.classList.remove("open");
        }
        document.body.classList.remove("sidebar-open");
        localStorage.setItem("sidebarState", "collapsed");
    });

    document.body.appendChild(overlay);
}

function bindMobileSidebarLinks() {
    document.querySelectorAll(".sidebar .nav-link").forEach((link) => {
        if (link.dataset.mobileBound === "true") {
            return;
        }

        link.dataset.mobileBound = "true";
        link.addEventListener("click", function () {
            if (window.innerWidth > 900) {
                return;
            }

            localStorage.setItem("sidebarState", "collapsed");
            document.body.classList.remove("sidebar-open");
        });
    });
}

function ensureCornerActions() {
    if (document.querySelector(".corner-actions")) {
        return;
    }

    const actions = document.createElement("div");
    actions.className = "corner-actions";
    actions.innerHTML = `
        <button class="corner-action-btn corner-theme-btn" type="button" data-corner-theme onclick="toggleTheme()">Dark</button>
        <button class="corner-action-btn corner-logout-btn" type="button" onclick="logout()">Logout</button>
    `;

    document.body.appendChild(actions);
}

function initializePortalShell() {
    ensureSidebarOverlay();
    ensureCornerActions();
    loadTheme();
    populateUserContext();
    enhanceSidebar();
    bindMobileSidebarLinks();
    setActive();
    applySidebarState();
}

window.addEventListener("resize", applySidebarState);

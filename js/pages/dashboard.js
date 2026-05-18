function initializeDashboard() {
    const profile = typeof getStoredStudentProfile === "function" ? getStoredStudentProfile() : null;
    const plannerTasks = JSON.parse(localStorage.getItem("plannerTasks") || "[]");
    const cgpaCards = document.querySelectorAll("#subjects .subject-card").length;

    if (profile) {
        document.querySelectorAll("[data-dashboard-branch]").forEach((el) => {
            el.textContent = profile.branch;
        });
        document.querySelectorAll("[data-dashboard-year]").forEach((el) => {
            el.textContent = profile.year;
        });
        document.querySelectorAll("[data-dashboard-hostel]").forEach((el) => {
            el.textContent = profile.hostel;
        });
        document.querySelectorAll("[data-dashboard-tagline]").forEach((el) => {
            el.textContent = profile.tagline;
        });
        document.querySelectorAll("[data-dashboard-spot]").forEach((el) => {
            el.textContent = profile.favoriteSpot;
        });
    }

    document.querySelectorAll("[data-dashboard-task-count]").forEach((el) => {
        el.textContent = String(plannerTasks.length);
    });
    document.querySelectorAll("[data-dashboard-cgpa-ready]").forEach((el) => {
        el.textContent = cgpaCards > 0 ? "Active" : "Ready";
    });
}

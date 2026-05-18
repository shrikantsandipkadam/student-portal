function fillProfileForm(profile) {
    populateBranchOptions();

    const fields = {
        profileName: profile.fullName,
        profileBranch: profile.branch,
        profileYear: profile.year,
        profileHostel: profile.hostel,
        profileTagline: profile.tagline,
        profileInstagram: profile.instagram,
        profileFavoriteSpot: profile.favoriteSpot,
        profileInterests: profile.interests,
        profileBio: profile.bio,
        profileEmail: profile.email,
        profileHometown: profile.hometown
    };

    Object.keys(fields).forEach((id) => {
        const input = document.getElementById(id);
        if (input) {
            input.value = fields[id] || "";
        }
    });
}

function populateBranchOptions() {
    const branchSelect = document.getElementById("profileBranch");
    if (!branchSelect || branchSelect.dataset.ready === "true") {
        return;
    }

    const options = ['<option value="">Select Department</option>'].concat(
        getDepartmentCatalog().map((department) => {
            return `<option value="${department.label}">${department.label}</option>`;
        })
    );

    branchSelect.innerHTML = options.join("");
    branchSelect.dataset.ready = "true";
}

function readProfileForm() {
    return {
        fullName: document.getElementById("profileName").value.trim(),
        branch: document.getElementById("profileBranch").value.trim(),
        departmentKey: normalizeDepartmentKey(document.getElementById("profileBranch").value.trim()),
        year: document.getElementById("profileYear").value.trim(),
        hostel: document.getElementById("profileHostel").value.trim(),
        tagline: document.getElementById("profileTagline").value.trim(),
        instagram: document.getElementById("profileInstagram").value.trim(),
        favoriteSpot: document.getElementById("profileFavoriteSpot").value.trim(),
        interests: document.getElementById("profileInterests").value.trim(),
        bio: document.getElementById("profileBio").value.trim(),
        email: document.getElementById("profileEmail").value.trim(),
        hometown: document.getElementById("profileHometown").value.trim()
    };
}

function applyProfilePreview(profile) {
    const completeness = getProfileCompleteness(profile);
    const plannerTasks = JSON.parse(localStorage.getItem("plannerTasks") || "[]");

    document.querySelectorAll("[data-profile-name]").forEach((el) => {
        el.textContent = profile.fullName;
    });
    document.querySelectorAll("[data-profile-branch]").forEach((el) => {
        el.textContent = profile.branch;
    });
    document.querySelectorAll("[data-profile-year]").forEach((el) => {
        el.textContent = profile.year;
    });
    document.querySelectorAll("[data-profile-hostel]").forEach((el) => {
        el.textContent = profile.hostel;
    });
    document.querySelectorAll("[data-profile-tagline]").forEach((el) => {
        el.textContent = profile.tagline;
    });
    document.querySelectorAll("[data-profile-instagram]").forEach((el) => {
        el.textContent = profile.instagram || "@campushelp";
    });
    document.querySelectorAll("[data-profile-spot]").forEach((el) => {
        el.textContent = profile.favoriteSpot;
    });
    document.querySelectorAll("[data-profile-bio]").forEach((el) => {
        el.textContent = profile.bio;
    });
    document.querySelectorAll("[data-profile-interests]").forEach((el) => {
        el.textContent = profile.interests;
    });
    document.querySelectorAll("[data-profile-hometown]").forEach((el) => {
        el.textContent = profile.hometown || "Not added yet";
    });
    document.querySelectorAll("[data-profile-email]").forEach((el) => {
        el.textContent = profile.email || "Not added yet";
    });
    document.querySelectorAll("[data-profile-completeness]").forEach((el) => {
        el.textContent = completeness + "%";
    });
    document.querySelectorAll("[data-profile-planner-count]").forEach((el) => {
        el.textContent = String(plannerTasks.length);
    });
    document.querySelectorAll("[data-profile-progress]").forEach((el) => {
        el.style.width = completeness + "%";
    });

    populateUserContext();
}

function saveProfileFromForm() {
    const nextProfile = readProfileForm();
    saveStudentProfile(nextProfile);
    applyProfilePreview(getStoredStudentProfile());
}

function resetProfileForm() {
    saveStudentProfile({
        ...defaultStudentProfile,
        fullName: localStorage.getItem("username") || "Student"
    });
    const profile = getStoredStudentProfile();
    fillProfileForm(profile);
    applyProfilePreview(profile);
}

function initializeProfilePage() {
    const profile = getStoredStudentProfile();
    fillProfileForm(profile);
    applyProfilePreview(profile);

    const saveButton = document.getElementById("saveProfileBtn");
    const resetButton = document.getElementById("resetProfileBtn");

    if (saveButton) {
        saveButton.addEventListener("click", saveProfileFromForm);
    }

    if (resetButton) {
        resetButton.addEventListener("click", resetProfileForm);
    }
}

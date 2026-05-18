const defaultStudentProfile = {
    fullName: "",
    branch: "Type Branch",
    departmentKey: "",
    year: "1st Year",
    hostel: "Type Hostel",
    bio: "Building a better student life at IIT Delhi.",
    interests: "Academics, coding, campus life",
    instagram: "@iitdstudent",
    email: "",
    hometown: "",
    tagline: "Study smarter. Live better. Stay connected.",
    favoriteSpot: "Central Library"
};

const departmentCatalog = [
    { key: "biotech", label: "Biochemical Engineering and Biotechnology" },
    { key: "chemical", label: "Chemical Engineering" },
    { key: "civil", label: "Civil Engineering" },
    { key: "cse", label: "Computer Science and Engineering" },
    { key: "design", label: "Design" },
    { key: "electrical", label: "Electrical Engineering" },
    { key: "ee_power", label: "Electrical Engineering (Power and Automation)" },
    { key: "ecm", label: "Engineering & Computational Mechanics" },
    { key: "energy", label: "Energy Engineering" },
    { key: "materials", label: "Materials Engineering" },
    { key: "mechanical", label: "Mechanical Engineering" },
    { key: "mnc", label: "Mathematics & Computing" },
    { key: "ep", label: "Engineering Physics" },
    { key: "pie", label: "Production and Industrial Engineering" },
    { key: "textile", label: "Textile Engineering" }
];

function getDepartmentCatalog() {
    return departmentCatalog.slice();
}

function getDepartmentLabelByKey(key) {
    const match = departmentCatalog.find((item) => item.key === key);
    return match ? match.label : "";
}

function normalizeDepartmentKey(value) {
    const raw = (value || "").trim().toLowerCase();
    if (!raw) {
        return "";
    }

    const exact = departmentCatalog.find((item) => item.key === raw || item.label.toLowerCase() === raw);
    if (exact) {
        return exact.key;
    }

    const aliasMap = {
        "computer science": "cse",
        "computer science and engineering": "cse",
        "textile and fibre engineering": "textile",
        "textile engineering": "textile",
        "materials engineering": "materials",
        "materials science and engineering": "materials",
        "mathematics and computing": "mnc",
        "maths and computing": "mnc",
        "mathematics & computing": "mnc",
        "engineering physics": "ep",
        "production and industrial engineering": "pie",
        "industrial engineering": "pie",
        "mechanical engineering": "mechanical",
        "energy engineering": "energy",
        "engineering and computational mechanics": "ecm",
        "electrical engineering": "electrical",
        "electrical engineering power and automation": "ee_power",
        "electrical engineering (power and automation)": "ee_power",
        "chemical engineering": "chemical",
        "civil engineering": "civil",
        "design": "design",
        "biochemical engineering and biotechnology": "biotech"
    };

    return aliasMap[raw] || "";
}

function getStoredStudentProfile() {
    let parsed = {};

    try {
        parsed = JSON.parse(localStorage.getItem("studentProfile") || "{}");
    } catch (error) {
        parsed = {};
    }

    const username = localStorage.getItem("currentUser") || localStorage.getItem("username") || "Student";
    const departmentKey = normalizeDepartmentKey(parsed.departmentKey || parsed.branch);
    const branchLabel = getDepartmentLabelByKey(departmentKey) || parsed.branch || defaultStudentProfile.branch;

    return {
        ...defaultStudentProfile,
        ...parsed,
        fullName: parsed.fullName || username,
        departmentKey: departmentKey,
        branch: branchLabel
    };
}

function saveStudentProfile(profile) {
    const departmentKey = normalizeDepartmentKey(profile.departmentKey || profile.branch);
    const normalizedProfile = {
        ...profile,
        departmentKey: departmentKey,
        branch: getDepartmentLabelByKey(departmentKey) || profile.branch
    };

    localStorage.setItem("studentProfile", JSON.stringify(normalizedProfile));
    if (profile.fullName) {
        localStorage.setItem("currentUser", profile.fullName);
    }
}

function getProfileCompleteness(profile) {
    const fields = ["fullName", "branch", "year", "hostel", "bio", "interests", "instagram", "tagline"];
    const filled = fields.filter((field) => (profile[field] || "").trim() !== "").length;
    return Math.round((filled / fields.length) * 100);
}

let plannerTasks = JSON.parse(localStorage.getItem("plannerTasks")) || [];

function savePlannerTasks() {
    localStorage.setItem("plannerTasks", JSON.stringify(plannerTasks));
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return day + "/" + month + "/" + year;
}

function updateTaskCount() {
    const taskCount = document.getElementById("taskCount");
    if (!taskCount) {
        return;
    }

    const count = plannerTasks.length;
    taskCount.textContent = count + (count === 1 ? " task" : " tasks");
}

function toggleOtherInput(selectId, inputId) {
    const select = document.getElementById(selectId);
    const input = document.getElementById(inputId);

    if (!select || !input) {
        return;
    }

    input.style.display = select.value === "Other" ? "block" : "none";
    if (select.value !== "Other") {
        input.value = "";
    }
}

function getSelectedValue(selectId, inputId) {
    const select = document.getElementById(selectId);
    const input = document.getElementById(inputId);

    if (!select || !input) {
        return "";
    }

    return select.value === "Other" ? input.value.trim() : select.value.trim();
}

function renderPlannerTasks() {
    const plannerList = document.getElementById("plannerList");
    if (!plannerList) {
        return;
    }

    plannerList.innerHTML = "";

    if (!plannerTasks.length) {
        const emptyItem = document.createElement("li");
        emptyItem.innerHTML = "<div class='planner-task-text'><div class='task-title'>No tasks added yet. Build your first study block to get started.</div></div>";
        plannerList.appendChild(emptyItem);
        updateTaskCount();
        return;
    }

    plannerTasks.forEach(function (item, index) {
        const li = document.createElement("li");

        const textWrap = document.createElement("div");
        textWrap.className = "planner-task-text";

        const topRow = document.createElement("div");
        topRow.className = "task-row";

        const dayBadge = document.createElement("span");
        dayBadge.className = "task-day-badge";
        dayBadge.textContent = item.day;

        const timeBadge = document.createElement("span");
        timeBadge.className = "task-time-badge";
        timeBadge.textContent = item.startTime + " -> " + item.endTime;

        topRow.appendChild(dayBadge);
        topRow.appendChild(timeBadge);

        if (item.taskMain) {
            const mainBadge = document.createElement("span");
            mainBadge.className = "task-type-badge";
            mainBadge.textContent = item.taskMain;
            topRow.appendChild(mainBadge);
        }

        if (item.taskSubType) {
            const subBadge = document.createElement("span");
            subBadge.className = "task-subtype-badge";
            subBadge.textContent = item.taskSubType;
            topRow.appendChild(subBadge);
        }

        textWrap.appendChild(topRow);

        const description = document.createElement("div");
        description.className = "task-title";
        description.textContent = item.taskDescription || "No extra description";
        textWrap.appendChild(description);

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-task-btn";
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            plannerTasks.splice(index, 1);
            savePlannerTasks();
            renderPlannerTasks();
        };

        li.appendChild(textWrap);
        li.appendChild(removeButton);
        plannerList.appendChild(li);
    });

    updateTaskCount();
}

function addPlannerTask() {
    const day = document.getElementById("plannerDay").value;
    const startHour = document.getElementById("startHour").value;
    const startMinute = document.getElementById("startMinute").value;
    const endHour = document.getElementById("endHour").value;
    const endMinute = document.getElementById("endMinute").value;
    const taskDescription = document.getElementById("plannerTask").value.trim();
    const taskMain = getSelectedValue("taskMain", "taskMainOther");
    const taskSubType = getSelectedValue("taskSubType", "taskSubTypeOther");

    plannerTasks.push({
        day: day,
        startTime: startHour + ":" + startMinute,
        endTime: endHour + ":" + endMinute,
        taskMain: taskMain,
        taskSubType: taskSubType,
        taskDescription: taskDescription
    });

    savePlannerTasks();
    renderPlannerTasks();

    document.getElementById("startHour").value = "00";
    document.getElementById("startMinute").value = "00";
    document.getElementById("endHour").value = "00";
    document.getElementById("endMinute").value = "00";
    document.getElementById("taskMain").value = "";
    document.getElementById("taskSubType").value = "";
    document.getElementById("taskMainOther").value = "";
    document.getElementById("taskSubTypeOther").value = "";
    document.getElementById("plannerTask").value = "";
    toggleOtherInput("taskMain", "taskMainOther");
    toggleOtherInput("taskSubType", "taskSubTypeOther");
}

function clearPlannerTasks() {
    plannerTasks = [];
    savePlannerTasks();
    renderPlannerTasks();
}

function printPlannerTasks() {
    const now = new Date();
    const pdfDate = formatDate(now);
    const pdfTime = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");

    let content = "<h2>Planner Tasks</h2>";
    content += "<p><strong>PDF Date:</strong> " + pdfDate + "</p>";
    content += "<p><strong>PDF Time:</strong> " + pdfTime + "</p>";
    content += "<table>";
    content += "<tr><th>Day</th><th>Time</th><th>Task</th><th>Subtask</th><th>Description</th></tr>";

    plannerTasks.forEach(function (item) {
        content += "<tr>" +
            "<td>" + (item.day || "") + "</td>" +
            "<td>" + item.startTime + " -> " + item.endTime + "</td>" +
            "<td>" + (item.taskMain || "") + "</td>" +
            "<td>" + (item.taskSubType || "") + "</td>" +
            "<td>" + (item.taskDescription || "") + "</td>" +
            "</tr>";
    });

    content += "</table>";

    const printWindow = window.open("", "", "width=1000,height=700");
    printWindow.document.write(
        "<html><head><title>Planner Tasks</title><style>" +
        "body{font-family:Arial,sans-serif;padding:24px;color:#0f172a;}" +
        "table{width:100%;border-collapse:collapse;margin-top:14px;}" +
        "th,td{border:1px solid #cbd5e1;padding:10px;text-align:left;vertical-align:top;}" +
        "th{background:#eff6ff;}" +
        "tr:nth-child(even){background:#f8fafc;}" +
        "</style></head><body>" + content + "</body></html>"
    );
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}

function loadPlannerTasks() {
    const taskMain = document.getElementById("taskMain");
    const taskSubType = document.getElementById("taskSubType");

    if (taskMain) {
        taskMain.addEventListener("change", function () {
            toggleOtherInput("taskMain", "taskMainOther");
        });
    }

    if (taskSubType) {
        taskSubType.addEventListener("change", function () {
            toggleOtherInput("taskSubType", "taskSubTypeOther");
        });
    }

    renderPlannerTasks();
}

function startPlannerClock() {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        const clockEl = document.getElementById("liveClock");
        const dateEl = document.getElementById("liveDate");

        if (clockEl) {
            clockEl.textContent = hours + ":" + minutes + ":" + seconds;
        }

        if (dateEl) {
            dateEl.textContent = formatDate(now);
        }
    }

    updateClock();
    setInterval(updateClock, 1000);
}

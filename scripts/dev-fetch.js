async function loadLogs(type, folder, listId) {
    const url = `https://api.github.com/repos/adithyanmsnandhu-2006/ria-ai-project/contents/assets/development/${folder}`;

    try {
        const response = await fetch(url);
        const files = await response.json();
        const list = document.getElementById(listId);

        if (!Array.isArray(files)) {
            list.innerHTML = "<li class='empty-msg'>No logs uploaded yet.</li>";
            return;
        }

        files.forEach(file => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${file.html_url}" target="_blank">${file.name.replace('.md','')}</a>`;
            list.appendChild(li);
        });
    } catch (error) {
        document.getElementById(listId).innerHTML =
            `<li class='empty-msg'>Unable to load ${type} logs.</li>`;
    }
}

loadLogs("Daily", "daily", "daily-logs");
loadLogs("Weekly", "weekly", "weekly-logs");
loadLogs("Monthly", "monthly", "monthly-logs");

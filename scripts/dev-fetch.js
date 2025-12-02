async function loadDailyLogs() {
    const filePath = "/RIA-Website/assets/developments/daily/2025-12-03.md";

    const response = await fetch(filePath);
    const markdownText = await response.text();

    const htmlContent = markdownText
        .replace(/### (.*)/g, "<h3>$1</h3>")
        .replace(/\*\*(.*)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br>");

    document.getElementById("daily-log-container").innerHTML = htmlContent;
}

loadDailyLogs();

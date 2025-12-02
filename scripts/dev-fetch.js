async function loadDailyLogs() {
    const latestFile = "2025-12-03.md";  // change daily when you upload new file
    const filePath = `../assets/developments/daily/${latestFile}`;

    try {
        const response = await fetch(filePath);
        const text = await response.text();

        const html = text
            .replace(/### (.*)/g, "<h3>$1</h3>")
            .replace(/\*\*(.*)\*\*/g, "<strong>$1</strong>")
            .replace(/\n/g, "<br>");

        document.getElementById("daily-log-container").innerHTML = html;

    } catch (error) {
        console.log("Daily log load error:", error);
    }
}

loadDailyLogs();

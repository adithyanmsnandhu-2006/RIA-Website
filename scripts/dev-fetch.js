async function loadDaily() {
    const fileList = ["2025-12-02.md", "2025-12-03.md"];  // manually list for now
    const container = document.getElementById("daily-log-container");

    container.innerHTML = ""; // clear default message

    for (const file of fileList) {
        const response = await fetch(`../assets/documents/developments/daily/${file}`);
        if (response.ok) {
            const text = await response.text();
            const div = document.createElement("div");
            div.classList.add("dev-item");
            div.innerText = text;
            container.appendChild(div);
        }
    }
}

loadDaily();

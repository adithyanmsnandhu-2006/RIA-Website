// Simple loader for DAILY markdown logs.
// It will NEVER crash the page even if files are missing.

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("daily-log-container");
    if (!container) return; // not on developments page

    // base path: match your current structure
    // Right now your .md files are under:
    // assets/images/developments/daily/
   const basePath = "../assets/documents/developments/daily/";
const files = [
    "2025-12-03.md",
    "Day-1---30-Nov-2025.md"
];


    // remove "no logs" text if we successfully load at least one
    let loadedAny = false;

    function mdToHtml(md) {
        // extremely simple markdown -> HTML
        return md
            .replace(/^### (.*)$/gm, "<h3>$1</h3>")
            .replace(/^## (.*)$/gm, "<h2>$1</h2>")
            .replace(/^# (.*)$/gm, "<h1>$1</h1>")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\n\n+/g, "<br><br>");
    }

    (async () => {
        for (const file of files) {
            try {
                const res = await fetch(basePath + file);
                if (!res.ok) continue; // skip missing ones

                const text = await res.text();
                const card = document.createElement("article");
                card.className = "dev-card";

                card.innerHTML = mdToHtml(text);
                container.appendChild(card);
                loadedAny = true;

            } catch (err) {
                // network/cors errors – ignore silently
                console.warn("Failed to load dev log:", file, err);
            }
        }

        if (loadedAny) {
            const emptyMsg = container.querySelector(".empty-msg");
            if (emptyMsg) emptyMsg.remove();
        }
    })();
});

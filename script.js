// ===============================
// Mihir Mobile Shop - Common JS
// ===============================

// Highlight active navigation link
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.textDecoration = "underline";
            link.style.fontWeight = "bold";
        }
    });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Service / Price search filter (optional)
function filterList(inputId, listClass) {
    const input = document.getElementById(inputId);
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll(`.${listClass} li`);

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "" : "none";
    });
}

// Auto update year in footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

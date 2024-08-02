document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Initial state based on preference or default
    const isDarkMode = localStorage.getItem("dark-mode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches;
    body.classList.toggle("dark-mode", isDarkMode);
    body.classList.toggle("light-mode", !isDarkMode);

    // Set initial icon
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

    themeToggle.addEventListener("click", () => {
        const isDarkMode = body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode", !isDarkMode);

        // Switch icon
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

        // Save preference
        localStorage.setItem("dark-mode", isDarkMode);
    });
    
});

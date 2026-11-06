const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", function() {
    navbar.classList.toggle("active");

    menu.textContent = navbar.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close menu after clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", function() {
        navbar.classList.remove("active");
        menu.textContent = "☰";
    });
});

// Welcome message
console.log("Welcome to Mughilan's Portfolio!");
/*
document.getElementById("theme-toggle").addEventListener("click", function() {
    // Toggle dark mode on the body
    document.body.classList.toggle("dark-mode");

    // Toggle day/night background based on dark mode
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.add("night");
        document.body.classList.remove("day");
    } else {
        document.body.classList.add("day");
        document.body.classList.remove("night");
    }

    // Switch icon between moon and sun
    const icon = document.querySelector("#theme-toggle");
    const moonIcon = icon.querySelector(".moon-icon");
    const sunIcon = icon.querySelector(".sun-icon");

    moonIcon.style.opacity = moonIcon.style.opacity === "0" ? "1" : "0";
    sunIcon.style.opacity = sunIcon.style.opacity === "1" ? "0" : "1";
}); */

/*
document.getElementById("theme-toggle").addEventListener("click", function() {
    // Toggle dark and light mode by switching classes on the body
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    const icon = document.querySelector("#theme-toggle");
    const moonIcon = icon.querySelector(".moon-icon");
    const sunIcon = icon.querySelector(".sun-icon");

    // Fade effect for icons (moon <--> sun)
    moonIcon.style.opacity = moonIcon.style.opacity === "1" ? "0" : "1";
    sunIcon.style.opacity = sunIcon.style.opacity === "0" ? "1" : "0";
}); */


document.getElementById("theme-toggle").addEventListener("click", function() {
    // Toggle dark mode on the body
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    // Toggle day/night background based on dark mode
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.add("day");
        document.body.classList.remove("night");
    } else {
        document.body.classList.add("night");
        document.body.classList.remove("day");
    }

    // Switch icon between moon and sun
    const icon = document.querySelector("#theme-toggle");
    const moonIcon = icon.querySelector(".moon-icon");
    const sunIcon = icon.querySelector(".sun-icon");

    moonIcon.style.opacity = moonIcon.style.opacity === "1" ? "0" : "1";
    sunIcon.style.opacity = sunIcon.style.opacity === "0" ? "1" : "0";
}); 

/*
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    const icon = document.querySelector("#theme-toggle");
    const moonIcon = icon.querySelector(".moon-icon");
    const sunIcon = icon.querySelector(".sun-icon");

    // Fade effect for icons (moon <--> sun)
    moonIcon.style.opacity = moonIcon.style.opacity === "0" ? "1" : "0";
    sunIcon.style.opacity = sunIcon.style.opacity === "1" ? "0" : "1";
}); */
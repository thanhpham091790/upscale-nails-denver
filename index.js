

const nav = document.querySelector(".nav");
const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");


// Open nav
openNav.addEventListener("click", () => {
    nav.style.transform = "translateX(0)";
});

// Close nav
closeNav.addEventListener("click", () => {
    nav.style.transform = "translateX(100%)";
});
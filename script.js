// JS Function to target the element "menu-links" in the html file to use it
// Automatically adds or removes the open class of JS on click. The open class will have styling

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
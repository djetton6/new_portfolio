//Select DOM objects to make second page.

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Start the Beginning State of the Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  //check to see if the menu is clicked
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    //Foreach function since we have multiple elements named item.
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    //Foreach function since we have multiple elements named item.
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

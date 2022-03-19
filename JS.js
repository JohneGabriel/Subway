// Change content Hero
const heroBtn = document.getElementById("hero-btn");
const heroDesc = document.getElementById("hero-desc");
let sW = window.screen.width;

function change() {
    if(sW >= 768){
        heroBtn.innerHTML = "Join now";
        heroBtn.classList.add("btn--larger");
        heroDesc.innerHTML = 'Or <a href="#"class="link-text link-text--accent hero__link-text">join in the app</a> for the best experience'
        
    }
}
change();

// Burger Menu

const menuBtn = document.querySelector(".menu-btn");
const navContent = document.querySelector(".nav-content");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        navContent.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        navContent.classList.remove("open");
        menuOpen = false;
    }
}); 



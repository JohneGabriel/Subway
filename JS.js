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

// Rewards

const rStars = document.querySelector(".rewards__stars");
const rOptions = document.querySelectorAll(".r-option")
const r25 = document.querySelector("#r25");
const r50 = document.querySelector("#r50");
const r150 = document.querySelector("#r150");
const r200 = document.querySelector("#r200");
const r400 = document.querySelector("#r400");

const rContent = document.querySelectorAll(".rewards__content")
const r25Content = document.querySelector("#r25-content");
const r50Content = document.querySelector("#r50-content");
const r150Content = document.querySelector("#r150-content");
const r200Content = document.querySelector("#r200-content");
const r400Content = document.querySelector("#r400-content");

rStars.addEventListener("click", (op) => {
    if(op.target.className === "r-option"){
        for(let i = 0; i < rOptions.length; i++) {
            rOptions[i].className = "r-option"
        }
        op.target.className = "r-option sl"
    }
})

rOptions.forEach(option => {
    option.addEventListener("click", toggleContainer)
})

function toggleContainer() {
    if(this.id === "r25") {
        for(i=0; i < rContent.length; i++) {
            rContent[i].className = "rewards__content";
        }
        r25Content.classList.add("vs");
    } else if(this.id === "r50") {
        for(i=0; i < rContent.length; i++){
            rContent[i].className = "rewards__content"
        }
        r50Content.classList.add("vs");
    } else if(this.id === "r150") {
        for(i=0; i < rContent.length; i++){
            rContent[i].className = "rewards__content"
        }
        r150Content.classList.add("vs");
    } else if(this.id === "r200") {
        for(i=0; i < rContent.length; i++){
            rContent[i].className = "rewards__content"
        }
        r200Content.classList.add("vs");
    } else if(this.id === "r400") {
        for(i=0; i < rContent.length; i++){
            rContent[i].className = "rewards__content"
        }
        r400Content.classList.add("vs");
    } 
}

// Footer

const footerEl = document.querySelectorAll(".footer-el");
footerEl.forEach(el => {
    el.addEventListener("click", () => {
        el.classList.toggle("extended");
    });
});


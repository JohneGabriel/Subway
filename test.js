const footerEl = document.querySelectorAll(".footer-el");

footerEl.forEach(el => {
    el.addEventListener("click", () => {
        el.classList.toggle("extended");
    });
});
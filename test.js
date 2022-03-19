const feHeader = document.querySelectorAll(".fe__header");
const feContent = document.querySelectorAll(".fe__content");

feHeader.forEach(heading => {
    heading.addEventListener("click", () => {
        heading.classList.toggle("extended");
        feContent.forEach(item => {
            item.classList.toggle("extended");
        });
    });
});

// feHeader.forEach(heading => {
//         heading.addEventListener("click", () => {
//             heading.classList.toggle("extended");

//         });
//     });
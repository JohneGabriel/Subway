const rOptions = document.querySelector(".rewards__container");
let selectedOption;

rOptions.addEventListener("click", function(e) {
    let target = event.target;
    
    if(target.className != "r-option") return;

    selected(target);
});

function selected(op) {
    if(selectedOption) {
        selectedOption.classList.remove("sl");
    }
    selectedOption = op;
    selectedOption.classList.add("sl");

};

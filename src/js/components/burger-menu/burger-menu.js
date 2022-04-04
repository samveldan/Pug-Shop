let burger = document.querySelector(".burger");
let menu = document.querySelector(".burger-menu");

window.addEventListener("click", (e) => {
    if(e.target.closest(".burger")) {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
    }
});

window.addEventListener("touchend", (e) => {
    if(!e.target.closest(".burger-menu")) {
        burger.classList.remove("active");
        menu.classList.remove("active");
    }
});
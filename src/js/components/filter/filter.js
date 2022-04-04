let filterBtn = document.querySelector(".filter-sign");
let filterMenu = document.querySelector(".search-room__filters");

window.addEventListener("click", (e) => {
    if(e.target.closest(".filter-sign")) {
        filterBtn.classList.toggle("active");
        filterMenu.classList.toggle("active");
    }
});

window.addEventListener("touchend", (e) => {
    if(!e.target.closest(".search-room__filters") && !e.target.closest(".air-datepicker")) {
        filterBtn.classList.remove("active");
        filterMenu.classList.remove("active");
    }
});
const toggleBtn = document.querySelector(".burger-menu");
const hiddenMenu = document.querySelector(".nav-menu");


toggleBtn.addEventListener("click", function() {
    hiddenMenu.classList.toggle("active");
    toggleBtn.classList.toggle("toggle");
});


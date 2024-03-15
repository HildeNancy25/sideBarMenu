const closeBar = document.querySelector("fa fa-times");
const sideBar = document.querySelector("fa fa-bars");
const hiddenMenu = document.getElementById("menu");

sideBar.addEventListener("click", ()=> {
    hiddenMenu.classList.toggle("show-container");
});

closeBar.addEventListener("click", ()=> {
    hiddenMenu.classList.remove("show-container");
});
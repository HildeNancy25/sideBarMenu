const bars=document.querySelector(".fa-bars");
const sidebar=document.querySelector(".side");
const closingbutton=document.querySelector(".fa-times");

bars.addEventListener("click",() =>{
    sidebar.classList.toggle("show-side");
});

closingbutton.addEventListener("click", () => {
    sidebar.classList.remove("show-side");
  });
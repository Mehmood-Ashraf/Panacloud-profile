const toogleButton = document.querySelector("#toogleButton");
const toogleNav = document.querySelector("#toogleNav");
const closeButton = document.querySelector("#closeButton");

toogleButton.addEventListener("click", () => {
    toogleNav.style.display = "flex"
})

closeButton.addEventListener("click", () => {
    toogleNav.style.display = "none"
})
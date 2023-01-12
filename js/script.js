const menuToggle = document.querySelector(".toggle");
const main = document.querySelector("main");


menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    main.classList.toggle("active")

    const navElement = document.getElementById("nav-id");
    const getComputedStyles = window.getComputedStyle(navElement);

    if(getComputedStyles.display === "none"){
        navElement.style.display = "flex";
    }else{
        navElement.style.display = "none";
    }
});
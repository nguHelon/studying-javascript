const accordionDIv = Array.from(document.getElementsByClassName("content-container"));
console.log(accordionDIv);

accordionDIv.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
    });

});
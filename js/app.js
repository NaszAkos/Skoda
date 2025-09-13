let fejlec_meret = 72;
let lastScrollTop = 0;
const navbar = document.getElementById("fejlec");
window.addEventListener("scroll", function() {//görgrtésellenőrzés, fejléc animáció
    navbar.style.transition = `top ${fejlec_meret/200}s ease-in-out, box-shadow ${fejlec_meret/200}s ease-in-out`;
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;//visszadja a görgetés helyzetét újabb||régebbi

    if (currentScroll > lastScrollTop) {
        navbar.style.top = -fejlec_meret + "px";
        if (currentScroll > fejlec_meret) {
            navbar.style.boxShadow = "none"
        } else {
            navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
        }
    } else {
        navbar.style.top = "0";
        if (currentScroll > 0) {
            navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
            
        } else {
            navbar.style.borderBottom = "none"
            navbar.style.boxShadow = "none"
        }
    }
    lastScrollTop = currentScroll;
});
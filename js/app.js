let fejlec_meret = 72;
let utolsoGorgetes = 0;
const navbar = document.getElementById("fejlec");
window.addEventListener("scroll", function() {//görgrtésellenőrzés, fejléc animáció
    navbar.style.transition = `top ${fejlec_meret/200}s ease-in-out, box-shadow ${fejlec_meret/200}s ease-in-out`;
    let aktuaklisGorgetes = window.pageYOffset || document.documentElement.scrollTop;//visszadja a görgetés helyzetét újabb||régebbi

    if (aktuaklisGorgetes > utolsoGorgetes) {
        navbar.style.top = -fejlec_meret + "px";
        if (aktuaklisGorgetes > fejlec_meret) {
            navbar.style.boxShadow = "none"
        } else {
            navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
        }
    } else {
        navbar.style.top = "0";
        if (aktuaklisGorgetes > 0) {
            navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
            
        } else {
            navbar.style.borderBottom = "none"
            navbar.style.boxShadow = "none"
        }
    }
    utolsoGorgetes = aktuaklisGorgetes;
});
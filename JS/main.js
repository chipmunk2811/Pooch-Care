// Theme-light-dark
document.getElementById("theme_switch").onclick = function () {
    var themedark = document.getElementById("theme_dark")
    var themelight = document.getElementById("theme_light")
    if (themedark) {
        themedark.className = "fa fa-sun"
        themedark.id = "theme_light"
    } else {
        themelight.className = "fa fa-moon"
        themelight.id = "theme_dark"
    }


    var themeswitchdark = document.getElementById("theme_switch_dark")
    var themeswitchlight = document.getElementById("theme_switch_light")
    if(themeswitchdark){
        themeswitchdark.id="theme_switch_light"
    }else{
        themeswitchlight.id="theme_switch_dark"
    }
}

window.addEventListener("scroll", handeScrolled);
var header = document.getElementById("header");
function handeScrolled(e) {
    if (scrollY >= 80) {
        header.classList.add("nav-fix");
    } else {
        header.classList.remove("nav-fix");
    }
}
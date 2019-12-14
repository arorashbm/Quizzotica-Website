function nav_color(width) {
    if(width <= 991) {
        for(i=0;i<nav.length;i++) {
            if(nav[i] != "responsive-nav")
                nav.add("responsive-nav");
        }
    }

    else if(width > 992) {
        for(i=0;i<nav.length;i++) {
            if(nav[i] == "responsive-nav")
                nav.remove("responsive-nav");
        }
    }
}

var nav = document.getElementById("ul-nav").classList;
var width = window.screen.width;
window.setInterval(function() {
    width = window.screen.width;
    nav_color(width);
}, 50);
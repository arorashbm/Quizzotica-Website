var a_top = document.getElementById("events-top");
var a_bottom = document.getElementById("events-bottom");
var width = window.screen.width;
console.log(width);
function change_events(width) {
    if(width <= 1214) {
        a_top.setAttribute("href", "index.html#events-mobile-tab");
        a_bottom.setAttribute("href", "index.html#events-mobile-tab");
    }
    else {
        a_top.setAttribute("href", "index.html#events-desktop");
        a_bottom.setAttribute("href", "index.html#events-desktop");
    }
}

function resolution_change(width) {
    if(document.getElementsByTagName("body")[0].id == "team-page") {
        return;
    }
    if(width >= 1215) {
        document.getElementById("events-desktop").style.display = "block";
        document.getElementById("events-mobile-tab").style.display = "none";
    }

    else if(width <= 1214 && width >= 571) {
        document.getElementById("events-desktop").style.display = "none";
        document.getElementById("events-mobile-tab").style.display = "block";
        document.getElementsByClassName("flex-imple")[0].classList.add("flex-imple-class");
    }

    else if(width <= 570) {
        document.getElementById("events-desktop").style.display = "none";
        document.getElementById("events-mobile-tab").style.display = "block";
    }
}

resolution_change(width);
change_events(width);
window.setInterval(function() {
    if(width != window.screen.width) {
        width = window.screen.width;
        resolution_change(width);
        change_events(width);
    }
}, 50);
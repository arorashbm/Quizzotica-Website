var footer_left = document.getElementsByClassName("footer-left");
var width = window.screen.width;

function haveActive(footer_left) {
    for(var i=0;i<footer_left.classList.length;i++) {
        if(footer_left.classList[i] == "active")
            return true;
        }
    return false;
}

function checkActiveFooter() {
    for(var i=0;i<footer_left.length;i++) {
        if(haveActive(footer_left[i]))
            return i;
    }
    return -1;
}

function checkFooter(width) {
    if(width >= 701) {
        if(checkActiveFooter() == 0) {
            footer_left[0].classList.remove("active");
            footer_left[0].classList.add("not-active");
            footer_left[1].classList.add("active");
        }
    }

    else if(width <= 700) {
        if(checkActiveFooter() == 1) {
            footer_left[1].classList.remove("active");
            footer_left[1].classList.add("not-active");
            footer_left[0].classList.add("active");
        }
    }
}

checkFooter(width);
window.setInterval(function() {
    width = window.screen.width;
        checkFooter(width);
}, 50);
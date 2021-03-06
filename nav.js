var active_nav = document.getElementsByClassName("nav-item");
var curr_page = document.getElementsByTagName("body")[0].id;
var header = document.getElementById("header");
var about = document.getElementById("about");
var events;
var gallery = document.getElementById("gallery");
var developers = document.getElementById("dev-h");
var footer = document.getElementById("footer");
var offset_arr;
var nav = document.getElementById("ul-nav").classList;
var html = document.getElementsByTagName("html")[0];
var width = window.screen.width;
var nav_button = document.getElementById("nav-button-less-than-992px");

function navButton(width) {
    if(width <= 991) {
        if(nav_button.classList.length == 1) {
            nav_button.firstElementChild.classList.remove("fa-bars");
            nav_button.firstElementChild.classList.add("fa-times");
        }
        else {
            nav_button.firstElementChild.classList.remove("fa-times");
            nav_button.firstElementChild.classList.add("fa-bars");
        }
    }
}

function eventsAdd(width) {
    if(width <= 1214)
        events = document.getElementById("events-mobile-tab");

    else
        events = document.getElementById("events-desktop");
    if(curr_page == "home-page")
        offset_arr = [header.offsetTop, about.offsetTop-20, events.offsetTop-20, gallery.offsetTop-20, developers.offsetTop-20, footer.offsetTop-20];
    else if(curr_page == "team-page") {
        if(activeFooter()) {
            offset_arr = [];
            changeActiveUtil(active_nav.length - 2);
        }
        else {
            offset_arr = [];
            changeActiveUtil(active_nav.length - 3);
        }
    }
}

function findActive() {
    for(var i=0;i<active_nav.length;i++) {
        if(active_nav[i].classList.length == 2)
            return i;
    }
}

function changeActiveUtil(i) {
    var curr_active = findActive();
    active_nav[curr_active].classList.remove("active-nav");
    active_nav[curr_active].children[0].classList.remove("active-nav-a");
    active_nav[i].classList.add("active-nav");
    active_nav[i].children[0].classList.add("active-nav-a");
}

function changeActive(e) {
    var clicked_nav;

    clicked_nav = e.currentTarget.getAttribute("data-nav-no");
    if(e.target.classList.length == 2)
        return;

    for(var i=0;i<active_nav.length;i++){
        changeActiveUtil(clicked_nav);
    }
}

function activeFooter() {
    var height = html.scrollHeight - window.screen.height
    if(pageYOffset+2 >= height)
        return true;
    return false;
}

function scrolledNav() { 
    for(var i=0;i<active_nav.length;i++) {
        if(i+1 < active_nav.length-2) {
            if(document.documentElement.scrollTop >= offset_arr[i] && document.documentElement.scrollTop < offset_arr[i+1])
                changeActiveUtil(i);
        }
        else {
            if(activeFooter())
                changeActiveUtil(active_nav.length - 2);
        }
    }
}

window.setInterval(function() {
    width = window.screen.width;
    navButton(width);
    eventsAdd(width);
    scrolledNav();
}, 50);

for(i=0;i<active_nav.length-1;i++){
    active_nav[i].addEventListener("click", changeActive);
}
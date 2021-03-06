var loader = document.getElementsByClassName("loader")[0];
loader.style.background = "url('./loader/loader.gif') 50% 50% no-repeat white";

window.onload = function() {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    loader.classList.remove("loader");

var a_top = document.getElementById("events-top");
var a_bottom = document.getElementById("events-bottom");
var width = window.screen.width;

function change_events(width) {
    if(width <= 1214) {
        a_top.setAttribute("href", "index.html#events-mobile-tab");
        //a_bottom.setAttribute("href", "index.html#events-mobile-tab");
    }
    else {
        a_top.setAttribute("href", "index.html#events-desktop");
        //a_bottom.setAttribute("href", "index.html#events-desktop");
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
    width = window.screen.width;
    resolution_change(width);
    change_events(width);
}, 50);

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

var area = document.getElementsByTagName("html")[0];
var nav_button = document.getElementsByClassName("navbar-toggler")[0];
var is_clicked = false;

function navClicked() {
  if(!is_clicked)
    is_clicked = true;
  else
    is_clicked = false;
}

function collapse() {
  nav_button.click();
  is_clicked = false;
}

function collapseClick(e) {
  if(e.target.id != "nav-button-less-than-992px" && e.target.id != "nav-button-less-than-992px-span") {
    if(is_clicked)
      collapse();
  }
}

nav_button.addEventListener("click", navClicked);
area.addEventListener("click", collapseClick);

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

//window.onload = function() {
  //document.getElementsByClassName("loader")[0].classList.remove("loader");
  function callLoop(quotes, i) {
    if(i==quotes.length){
      i=0;
    }
    quotes[i].className = quotes[i].className.replace("not-", "");
    if(i==0){
      if(quotes[quotes.length-1].className == "quote active"){
        quotes[quotes.length-1].className = quotes[quotes.length-1].className.replace("active", "not-active");
      }
    }
    else{
      if(quotes[i-1].className == "quote active"){
        quotes[i-1].className = quotes[i-1].className.replace("active", "not-active");
      }
    }
    window.setTimeout(() => callLoop(quotes, ++i), 5000);
  }
  quotes = document.getElementsByClassName("quote");
  callLoop(quotes, 0);
//}

/*var cards_btn_front = document.getElementsByClassName("btn-card-front");
var cards_btn_back = document.getElementsByClassName("btn-card-back");
var cards_front = document.getElementsByClassName("front");
var cards_back = document.getElementsByClassName("back");
var card_no;

function flipCardBack(e) {
    for(var i=1;i<=cards_btn_front.length;i++) {
        if(e.target.classList[3] == ("btn-" + i)) {
            card_no = i;
            break;
        }
    }
    cards_front[card_no-1].style.display = "none";
    cards_back[card_no-1].style.display = "block";
}

function flipCardFront(e) {
    for(var i=1;i<=cards_btn_back.length;i++) {
        if(e.target.classList[3] == ("btn-" + i)) {
            card_no = i;
            break;
        }
    }
    cards_front[card_no-1].style.display = "block";
    cards_back[card_no-1].style.display = "none";
}

for(var i=0;i<cards_btn_front.length;i++) {
    cards_btn_front[i].addEventListener("click", flipCardBack);
    cards_btn_back[i].addEventListener("click", flipCardFront);
}*/

var dots = document.getElementsByClassName("dots");
var more = document.getElementsByClassName("read-more");
var btn = document.getElementsByClassName("btn-more-less");

function readMoreLess(e) {
    var clicked_card = e.currentTarget.getAttribute("data-button-more-less");
    btnText = btn[clicked_card];
    moreText = more[clicked_card];
    dots_card = dots[clicked_card];

    if (dots_card.style.display === "none") {
        dots_card.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }

    else {
        dots_card.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

for(var i=0;i<btn.length;i++)
    btn[i].addEventListener("click", readMoreLess);
}
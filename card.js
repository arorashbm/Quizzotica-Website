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
var cards_btn_front = document.getElementsByClassName("btn-card-front");
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
}
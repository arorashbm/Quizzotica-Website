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
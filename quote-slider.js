window.onload = function() {
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
    window.setTimeout(() => callLoop(quotes, ++i), 3000);
  }
  quotes = document.getElementsByClassName("quote");
  callLoop(quotes, 0);

  /*active_nav = document.getElementsByClassName("nav-item");

  function changeActive() {
    for(i=0; i<active_nav.length; i++){
      if(active_nav[i].className == "nav-item active") {
        active_nav[i].className = active_nav[i].className.replace(" active", "");
        break;
      }
    }

    this.classList.add("active");
  }

  for(i=0; i<active_nav.length; i++){
    active_nav[i].addEventListener("click", changeActive);
  }*/
}

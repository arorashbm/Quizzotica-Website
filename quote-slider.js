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

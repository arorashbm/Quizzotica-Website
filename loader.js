var loader = document.getElementsByClassName("loader")[0];
var loader_gif = Math.floor(Math.random()*4) + 1;

loader.style.background = "url('./loader/" + loader_gif + ".gif') 50% 50% no-repeat white";

window.onload = function() {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    loader.classList.remove("loader");
}
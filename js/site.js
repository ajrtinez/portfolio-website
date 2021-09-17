let primaryBTN = document.querySelector(".primary-btn");
let primaryButtonIcon = document.querySelector(".icon-btn");

primaryBTN.onmouseover = function() {
   this.style.backgroundColor = "#5FB4A2";
   primaryButtonIcon.style.backgroundColor = "#56A292";
}

primaryBTN.onmouseout = function() {
   this.style.backgroundColor = "#203A4C";
   primaryButtonIcon.style.backgroundColor = "#1D3445";
}
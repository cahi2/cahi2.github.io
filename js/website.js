//Script for the slideshow------------------------------------------------------

var slideIndex = 1;
showDivs(slideIndex);

//Code that increases/decreases the slideshow. Buttons interact with this
function plusDivs(n) {
  showDivs(slideIndex += n);
}

//Code which sets all the pictures in the slideshow to hidden, except the one the index number matches
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (n > x.length){slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }

  x[n].style.display = "block";
}

var SlideIndex = 1;
showDivs(SlideIndex);

function plusDivs(n) {
  showDivs(SlideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (n > x.length){SlideIndex = 1}
  if (n < 1) {SlideIndex = x.length}
  for (i = 0; x.length; i++){
    x[i].style.display = "none";
  }
  x[SlideIndex-1].style.display = "block";
}

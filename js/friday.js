//Script for the images------------------------------------------------------

var slideIndex = 1;

function showImage(n) {
  var i;
  var x = document.getElementsByClassName("fridayImages");
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }

  x[n].style.display = "block";
}

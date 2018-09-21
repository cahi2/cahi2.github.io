//Script for the slideshow------------------------------------------------------

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (n > x.length){slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//Script for the progress bar racer----------------------------------------------

function move() {
  var bars = [];
  var width = [];
  //Loop which declares the variables of the progress bars
  for (i=0; i<4; i++){
    bars[i] = document.getElementById("racer"  + i);
    width[i] = 1;
  }
  var id = setInterval(frame, 50);

  function frame() {
    for (i = 0; i <4; i++){
      if (width[i] >=100) {
        clearInterval(id);
      } else {
        width[i] = width[i] + Math.round(Math.random());
        bars[i].style.width = width[i] + '%';
      }
    }


  }
}

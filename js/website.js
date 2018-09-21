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

//Script for the progress bar racer---------------------------------------------

function move() {
  var racer1 = document.getElementById("racer1");
  var racer2 = document.getElementById("racer2");
  var racer3 = document.getElementById("racer3");
  var racer4 = document.getElementById("racer4");

  var width1 = 1;
  var width2 = 1;
  var width3 = 1;
  var width4 = 1;

  var id = setInterval(frame, 50);
  function frame() {
    if (width1 >= 100 || width2 >= 100 || width3 >= 100 || width4 >= 100) {
      clearInterval(id);
    }else {
      width1 = width1 + Math.random();
      width2 = width2 + Math.random();
      width3 = width3 + Math.random();
      width4 = width4 + Math.random();

      racer1.style.width = width1 + '%';
      racer2.style.width = width2 + '%';
      racer3.style.width = width3 + '%';
      racer4.style.width = width4 + '%';

    }
  }
}

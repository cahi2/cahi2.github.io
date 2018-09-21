//Moving the bars
function move() {

  //An array for the progress bars and their width
  var bars = [];
  var width = [];
  //Loop which declares the variables of the progress bars
  for (i=0; i<6; i++){
    bars[i] = document.getElementById("racer"  + i);
    width[i] = 1;
  }

  //Sets time between bar movements
  var id = setInterval(frame, 50);

  //The code which adds to each of the bars width
  function frame() {
    for (i = 0; i <6; i++){
      if (width[i] >=100) { clearInterval(id);}
      else {
        width[i] = width[i] + Math.round(Math.random());
        bars[i].style.width = width[i] + '%';
        if(bars[i].style.display === "none"){ width[i] = 0; }
      }
    }
  }
}

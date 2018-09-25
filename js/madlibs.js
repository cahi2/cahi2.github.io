

function runGame(){
  var firstname = document.getElementById("firstname");
  var adjective = document.getElementById("adjective");
  var place = document.getElementById("place");

  var sentence = document.getElementById("sentence").innerHTML =
   ("There was once a person named " + firstname
   + ". They were known far and wide, as that really " + adjective
   + " guy who lived in a dollhouse modelled after" + place + ".");

}

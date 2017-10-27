// Exo 1 changer la couleur quand apuis sur chiffre 0 à 9

var character = document.getElementById("character");

// Ajout l'event quand on appui sur la touche (= keydown)
// + Sa fonction (e = event)
document.addEventListener("keydown", function(e) {

  // Switch fonctionne comme un if
  // On precise (e.keyCode = event soit sur les codes touche)
  switch (e.keyCode) {
    case 48: //Touche 0
      character.style.backgroundColor = "#fff" // Action de la fonction = changer en blanc
    break;
    case 49: //Touche 1
      character.style.backgroundColor = "#3AD0BC"
    break;
    case 50: //Touche 2
      character.style.backgroundColor = "#147F71"
    break;
    case 51: //Touche 3
      character.style.backgroundColor = "#51D13E"
    break;
    case 52: //Touche 4
      character.style.backgroundColor = "#CCD13E"
    break;
    case 53: //Touche 5
      character.style.backgroundColor = "#D1823E"
    break;
    case 54: //Touche 6
      character.style.backgroundColor = "#D13E3E"
    break;
    case 55: //Touche 7
      character.style.backgroundColor = "#3EA5D1"
    break;
    case 56: //Touche 8
      character.style.backgroundColor = "#563ED1"
    break;
    case 57: //Touche 9
      character.style.backgroundColor = "#BD3ED1"
    break;
  }
});

// Exo 2 Rendre opaque avec les fleches

var up = document.getElementById("up");
var down = document.getElementById("down");
var right = document.getElementById("right");
var left = document.getElementById("left");


document.addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 37: // Fleche left
      left.classList.add("highlight");
    break;
    case 38: //Fleche up
      up.classList.add("highlight");
    break;
    case 39: // Fleche right
      right.classList.add("highlight");
    break;
    case 40: // Fleche down
      down.classList.add("highlight");
    break;
  }
});

document.addEventListener("keyup", function(e) {
  switch (e.keyCode) {
    case 37: // Fleche left
      left.classList.remove("highlight");
    break;
    case 38: //Fleche up
      up.classList.remove("highlight");
    break;
    case 39: // Fleche right
      right.classList.remove("highlight");
    break;
    case 40: // Fleche down
      down.classList.remove("highlight");
    break;
  }
});

// Exo 1 Faire disparaitre les 3 div quand souris dessus

var hoverMe = document.getElementsByClassName("hoverMe");
  for (var i = 0; i < hoverMe.length; i++) {
    var thisElem = hoverMe[i];
    var thisElemName = thisElem.className;
    thisElem.addEventListener("mouseover", function(event) {
      event.preventDefault();
      this.classList.add("hidden");
    });
  }

// Exo 2 Quand click sur reset => faire apparaitre les 3 div disparut

var reset = document.getElementById("reset");
reset.addEventListener("click", function(event) {
  event.preventDefault();
  for (var i = 0; i < hoverMe.length; i++) {
    var objet = hoverMe[i];
    objet.classList("hidden");
  }
});

// Exo 3 Afficher la position de la souris quand elle bouge

var horizontal = document.getElementById("axe-x");
var vertical = document.getElementById("axe-y");
document.addEventListener("mousemove", function(event) {
  var x = event.clientX;
  var y = event.clientY;
  horizontal.innerHTML = "x ( "+x+" )" ;
  vertical.innerHTML = "y ( "+y+" )" ;
});

// // Pour le bouton reset
//
// function monReset() {
//   document.getElementById("reset").reset();
// }

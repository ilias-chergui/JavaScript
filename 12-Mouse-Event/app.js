// Exo 1 Faire disparaitre les 3 div quand souris dessus

var hoverMe = document.querySelectorAll(".hoverMe");
  for (var i = 0; i < hoverMe.length; i++) {
    hoverMe[i].addEventListener("mouseover", function() {
      this.classList.add("hidden");
    });
  }

// Exo 2 faire apparaitre quand click

var reset = document.querySelector("#reset");
  reset.addEventListener("click", function() {
    for (var i = 0; i < hoverMe.length; i++) {
      hoverMe[i].classList.remove("hidden");
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

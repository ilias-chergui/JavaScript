///// Exo 1 Manip class /////

//retirer class bg-aqua de tout le body
//et remplacer par bg-olive
let body = document.querySelector("body");
body.classList.remove("bg-aqua");
body.classList.add("bg-olive");

//retirer class bg-lime et gray du first-paragraph
//et remplacer par aqua
let firstParagraph = document.getElementById("first-paragraph");
firstParagraph.classList.remove("bg-lime");
firstParagraph.classList.remove("gray");
firstParagraph.classList.add("aqua");

//retirer class bg-silver de tous les elements "bg-silver"
//et remplacer par bg-teal
let teal = document.querySelector("blockquote");
teal.classList.remove("bg-silver");
teal.classList.add("bg-teal");

//select tout element de type blockquote
//et leur ajouter class bg-white
let white = document.querySelector("blockquote");
white.classList.add("bg-white");

///// Exo 2 Selecteur css /////

//Select my-table
//Lui ajouter class bg-purple
let myTable = document.getElementById("my-table");
myTable.classList.add("bg-purple");

//select tous les <p> dans container
//leur ajouter classe shadow
let paragraph = document.querySelectorAll("p");
for (var i = 0; i < paragraph.length; i++) {
  paragraph[i].classList.add("shadow");
}

///// Exo 3 /////

//Select tous les <pre>
let prez = document.querySelector("pre");

//leurs changer le couleur du texte
prez.style.color = "yellow";

//leurs changer backgroundColor
prez.style.backgroundColor = "blue";

//Ajouter border top
prez.style.borderTop = "3px solid red";

//Ajouter border bottom
prez.style.borderBottom = "3px solid red";

//Select le 1er h3
let h3 = document.querySelector("h3");

//Remplacer contenu html en <em>Italic title ! yeah! </em>
h3.innerHTML = "<em>Itelic title ! yeah! </em>";

//Select le 1er h2
let h2 = document.querySelector("h2");

h2.style.color = "yellow";

//Remplacer contenu html en <strong>HTML doens't work !</strong>
h2.innerHTML = "<strong>HTML doens't work !</strong>";

///// Exo 4 Creation d'elements /////

//Select 1er ul
var ul2 = document.querySelector("ul");

//Créer element li
var liUl = document.createElement("li");

//Ajouter texte dans li
liUl.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";

//Ajouter la li dans le ul
ul2.appendChild(liUl);

//Select le 1er lien dans la li créée
var a = ul2.querySelectorAll("li")[2];
a = a.querySelector("a");

//Mettre un style au text du lien
a.style.color = "#FFDC00";

///// Exo 4.1 Creer/Supprimer plusieur élements /////

//Select 1er ol
var ol = document.querySelector("ol");

//Boucle sur ses enfants et les supprimer
while (ol.firstChild) {
  ol.removeChild(ol.firstChild);
}

//Declarer tableau
let tableau = ["Silent Teacher", "Code Monkey", "CodeCombat"];

//Boucle sur les enfants du tableau
for (var i = 0; i < tableau.length; i++) {
  tableau[i];
}

//créer li pour chaque enfant
var liOl = document.createElement("li");

// //Ajouter aux li la valeur de chaque enfant
// ------------- A trouver -------------------

//Ajouter chaque li dans la ol
ol.appendChild(liOl);

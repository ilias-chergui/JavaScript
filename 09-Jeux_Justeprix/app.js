//Exo Juste Prix

  let message;
  let essais = 0;
  let mini = Math.floor(20);
  let maxi = Math.ceil(80);
  let random = Math.floor(Math.random() * (maxi - mini) + mini);
  let resultat = true;
  let monChiffre = prompt("Entre ton chiffre entre 20 et 80. [nombre d'essais : "+ essais +"]");
  console.log(random);

  while (resultat) {
    if (isNaN(monChiffre)) {
      monChiffre = prompt("Tu n'as pas entré de chiffre !");
    } else if (monChiffre<20 || monChiffre>80) {
      monChiffre = prompt("Ton chiffre n'est pas compris entre 20 et 80. [nombre d'essais : "+ essais +"]");
    } else if (monChiffre>random) {
      essais = essais + 1;
      monChiffre = prompt("Ton chiffre est trop grand ! [nombre d'essais : "+ essais +"]");
    } else if (monChiffre<random) {
      essais = essais + 1;
      monChiffre = prompt("Ton chiffre est trop petit ! [nombre d'essais : "+ essais +"]");
    } else {
      essais= essais + 1;
      resultat = false;
    }
  }
document.write("Le chiffre était " + random + " !" + "<br/>");
document.write("Tu as réussi en " + essais + " essais !");

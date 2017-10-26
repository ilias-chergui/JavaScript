
  var lettre = ["B", "O", "N", "J", "O", "U", "R"];
  var devinee = ['', '', '', '', '', '', ''];
  var compteur = 0;
  var message = "Felicitation, tu as ENFIN reussi!";

  while (compteur < 10) {
    compteur++;
    var l = prompt("Entre ta lettre");

    for (var i = 0; i < lettre.length; i++) {
      if(lettre[i] == l){
        /*var index = lettre.indexOf(l);
        devinee.splice(index, 1, l);
        lettre.splice(index, 1, "*");*/
        lettre[i]="*";
        devinee[i]=l;
      }
    }
    console.log(devinee);
  }


    // A mettre le message de félicitation !!!

//Exo1 Langues

  var lang = prompt("Tapez les initiales de votre langue");
  var msg = "";
  var fr = "Bonjour tout le monde";
  var en = "Hello world";
  var es = "Hola mundo";

  if (lang == "fr")
    { msg = "Bonjour tout le monde" }
  else if (lang == "en")
    { msg = "Hello world" }
  else if (lang == "es")
    { msg = "Hola mundo" }

  console.log(msg);


//Exo2 Affichage des scores
  /*
  var score = prompt("tapez votre score");
  var resultat = "";

  if (score >= 90)
    { resultat = "A" }
  else if (score < 90 && score > 50)
    { resultat = "B" }
  else if (score <= 50)
    { resultat = "C" }

  console.log(resultat);
  */

//Exo3 Mettre au pluriel
  /*
  var singulier = "voiture";
  var nombre = prompt("Combien avez-vous de voitures ?");
  var resultat = "";

  if (nombre > 1)
    { resultat = singulier + "s" }
  else
    { resultat = singulier }

  console.log("J'ai " + nombre + " " + resultat);
  */

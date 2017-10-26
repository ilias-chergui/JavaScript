//Le Juste Prix
        function jeu() {
        function nb_aleatoire(min, max)
        {
        var nb = min + (max-min+1)*Math.random();
        return Math.floor(nb);
        }

        //Initialisation
        var nb_coup = 1;
        var min = 1;
        var max = 100;
        var nombre = 5;
        var nb = nb_aleatoire(min, max);

        while(nombre != nb) {
        var nombre = prompt("Entrer un nombre [nombre de coup(s) : "+ nb_coup +"]" , "Nombre compris entre 1 et 100");
        nb = 6;

        if(nombre == "Nombre compris entre 1 et 100") {//Si l(utilisateur appuis sur Ok sans toucher à rien
        alert("Entrer un nombre entre 1 est 100");
        continue;
        }
        if(nombre == null) {//Annuller
        alert("Bye !!!");
        break;
        }
        if(isNaN(nombre)) {//Caractere incorrect
        alert("\"" + nombre + "\" n'est pas un nombre");
        continue;
        }
        if(nombre < 1) {//Nombre trop petit
        alert(+ nombre + " est trop petit !");
        continue;
        }
        if(nombre > 100) {//Nombre trop grand
        alert(+ nombre + " est trop grand !");
        continue;
        }
        if(nombre < nb) {//C'est plus !
        alert("C'est plus !");
        nb_coup ++;
        }
        if(nombre > nb) {//C'est moins !
        alert("C'est moins !");
        nb_coup ++;
        }
        if(nombre == nb) {//Gagné !
        alert("Bravo le nombre mystère était "+ nb);
        break;
        }
        }

        if(nombre != null) {//Si l'utilisateur n'a pas clicke sur "Annuller", on lui affiche le nombre de coups qu'il a fait
        alert("Tu as gagné en "+ nb_coup +" coup(s)");
        var image_gagne = document.getElementById("gagne");
        image_gagne.src = "http://m.memegen.com/pdufvo.jpg";
        }
        }

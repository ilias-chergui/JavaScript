//Exo 1 PNJ
/*
  let Character = {
    name : "Ilias",
    age : 25,
    items_to_give : ["PC", " Un Cookie", " Une nouvelle souris"],
  }
  function giveItem() {
    return random = Character.items_to_give [Math.floor(Character.items_to_give.length * Math.random())];
  }
  for (let key in Character) {
    console.log(key + " : " +Character[key]);
  }
  console.log(giveItem());
*/

//Exo 2 Shop
/*
  let epee = {
    titre : "Aubetoile",
    physic : 100,
    magic : 0,
    lvlmini : 10,
    dispo : true,
  }
  let hache = {
    titre : "Vutrad",
    physic : 200,
    magic : 0,
    lvlmini : 20,
    dispo : false,
  }
  let sceptre = {
    titre : "Baton de Magnus",
    physic : 0,
    magic : 100,
    lvlmini : 5,
    dispo : true,
  }

  let objet = [epee, hache, sceptre];

  //Afficher tous les objets
  function affichage(objet) {
    for (var i = 0; i < objet.length; i++) {
      console.log(objet[i]);
    }
  }
  affichage(objet);

  //Afficher les objets dispo
  function objetDispo() {
    for (var i = 0; i < objet.length; i++) {
      if (objet[i].dispo) {
        console.log(objet[i]);
      }
    }
  }
  objetDispo(objet);

  //Afficher objet de lvl 10 mini
  function lvl10() {
    for (var i = 0; i < objet.length; i++) {
      if (objet[i].lvlmini >= 10) {
        console.log(objet[i]);
      }
    }
  }
  lvl10(objet);
*/

//Exo 3 Personnage
/*
  console.log("Tour 1");

  let mainCharacter = {
    name : "Ilias",
    level : 25,
    life : 5,
  }

  let weapon = {
    name : "Chicken-Stick",
    damage : 100000,
  }
  function attack() {
              return mainCharacter.name + " attaque avec un " + weapon.name + ". Les degats sont " + (mainCharacter.level * weapon.damage);
            }
            console.log(attack());

console.log("Tour 2");
//ExoBonus Adversaire

  let Adversaire = {
    name : "Mr.Chips",
    level : 93,
    life : 10000,
  }
  let weaponAdv = {
   name : "Potatoes",
   damage : 100000,
  }

  function combat() {
    return Adversaire.name + " replique avec des " + weaponAdv.name + ". Les degats sont " + (Adversaire.level * weaponAdv.damage);

  }
  console.log(combat());
*/

"use strict";

require("core-js/modules/es.array.reduce.js");
//créer un tableau de nombre
let t = [2, 3, 5, 56];
function carre(element) {
  return element * element;
}
let t2 = t.map(carre);

// let t3 = t.map(carre()); //il faut passer la réference
console.log("la valeur de t2:");
console.log(t2);
// console.log("la valeur de t3:");
// console.log(t3);

//filter
// retourne un nouveau tableau avec des nombres pair
let t4 = t.filter(function (element) {
  return element % 2 === 0;
});
console.log("t: " + t);
console.log("t4: " + t4);

//reduce
//additioner tous les nombres d'un tableau
let t5 = t.reduce(function (prevValue, currValue) {
  return prevValue + currValue;
}, 0);
console.log("t5: " + t5);

//notre implémentation de la fonction map
function map(t, funcCallback) {
  let tabResultat = [];
  for (let index = 0; index < t.length; index++) {
    const element = t[index];
    tabResultat.push(funcCallback(element, index));
  }
  return tabResultat;
}
let t6 = map(t, function (element) {
  return element * element;
});
console.log("t6: " + t6);
function formatterNom(nom, prenom) {
  return nom + " " + prenom;
}
let formatterNomV2 = (nom, prenom) => {
  return nom + " " + prenom;
};
let formatterNomV3 = (nom, prenom) => nom + " " + prenom;
function validerNom(nom) {
  nom = nom.trim();
  if (nom.length === 1) {
    return true;
  }
  return false;
}
let validerNomV2 = nom => {
  nom = nom.trim();
  if (nom.length === 1) {
    return true;
  }
  return false;
};
function getSautLigneHTML() {
  return "<br>";
}
let getSautLigneHTMLV2 = () => "<br>";
// JavaScript c'est un language de script principalement utlisé sur le Web (mais pas que)
// JQuery est une librairie de Javascript et a besoin de javascript pour fonctionner


console.log('----------');
console.log('Exercice 1');
console.log('----------');

// C'est une fonction qui va check que tout le document HTML est chargé avant
// d'appeler la fonction anonyme contenant le console.log()
$(document).ready(function(){
    console.log("Je peux maintenant écrire du code jQuery");
});
// Elle est indispensable (surtout que les scripts sont chargés dans le HEAD)
// Parce que pour acceder au élément du dom il faut qu'il soit chargé.
// Généralement on repere JQuery avec le signe $();
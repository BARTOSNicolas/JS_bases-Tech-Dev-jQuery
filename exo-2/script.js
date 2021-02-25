console.log('----------');
console.log('Exercice 2');
console.log('----------');

// selecteur de tag $('tagName')
// selecteur de Class $('.class')
// selecteur de ID $('#id')


$(document).ready(function (){

let title = $('#title');  //Selectionne l'id title
let sidemenu = $('.nav *'); // Selectionne tous les element de la class nav
let footer = $('footer'); //Selectionne les tags footer
let search = $('.sidenav .input-group'); //select toutes les classes input-group de sidenav
let glyphIcon = $('.glyphicon'); //Select toutes les classes glyphicon
let labelGreen = $('.label-success'); //Select toutes les classes label-success
let paraIntro = $('.intro'); //select toutes les class intro
let imgTime = $('img.glyphicon-time'); // select toutes les img qui ont la class glyphicon-time
let navFirstEl = $('.sidenav *:gt(0)');//Select la premier elemen dans la sidenav
let paraEven = $('p:even'); // Select un paragraphe sur deux trier par paire

});
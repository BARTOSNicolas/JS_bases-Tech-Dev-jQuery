console.log('----------');
console.log('Exercice 3');
console.log('----------');

// Faites toutes vos manipulations de DOM ici


$(document).ready(function (){
    //1
    $('h1').text('Nico');
    //2
    $('#tagline').text('Développeur Sauvage');
    //3
    $('.navbar-nav:first').hide();
    //4
    $('.navbar-right span').removeClass('glyphicon glyphicon-log-in').addClass("bi bi-person-circle");
    //5
    $('footer p').text('Copyright 2021');
    //6 + bonus
    $('#work1 p').each((index, elem) => $(elem).text('Mon projet '+ (index +1) ));
    //7 + bonus
    $('#work1 img').each((index, elem) => $(elem).attr('src', 'img/projet'+(index+1)+'.jpg'))
    //8
    let projetDiv = $('<div></div>');
    projetDiv.addClass('last-project');
    projetDiv.css('paddingBottom', '54px');
    let projetText = $('<p></p>');
    projetText.text('Mon dernier projet');
    let projetImg = $('<img>');
    projetImg.attr('src', 'img/project-main.jpg');
    projetImg.height('250px');
    $('h3').after(projetDiv);
    projetDiv.append(projetText, projetImg);
    //9
    $('footer').addClass('intro');
})


// Et pas dans votre fichier HTML ! 
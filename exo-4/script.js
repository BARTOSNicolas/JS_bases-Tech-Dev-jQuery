console.log("exercice 4");

$(document).ready(function(){
    //1
    $('footer button').click(() => {
        //2
        let email = $('footer input').val();
        if (email){
            alert( `Merci ${email}, nous vous tiendrons informé des différentes offres`);
        }else{
            alert("C'est mieux avec ton email co....")
        }
    })

    //3
    // $('#myNavbar li:eq(1)').dblclick(() => {
    //     $('#myNavbar li:eq(1)').hide(); //This ne marche pas :(
    // });
    $('#myNavbar li:eq(1)').on('dblclick', function () {
        $(this).hide();//This  marche  :)
    });

    //4
    let panierCount = 0;
    let panierText = $('<span></span>');
    $('#myNavbar li:eq(3) a').append(panierText);

    // $('.panel img').on('click', () => {
    //     panierCount++;
    //     panierText.text('('+panierCount+')');
    // });

    //5
    $('.panel').mouseenter(function() {
            console.log("Le client regarde l'article : " + $(this).children(".panel-footer").text());
    });

    //6
    $('footer input').on('click', function (){
        console.log("L'utilisateur a cliqué dans l'input");
    });
    $('footer input').on('input', function (){
        console.log($(this).val());
    });

    //7 BONUS
    $('.panel').on("click", function() {
        if($(this).children(".panel-footer").text() == "Buy 25 ipads"){
            panierCount = panierCount +25;
            panierText.text('('+panierCount+')');
        }else if($(this).children(".panel-footer").text() == "Buy 20 computers"){
            panierCount = panierCount +20;
            panierText.text('('+panierCount+')');
        }else{
            panierCount = panierCount +50;
            panierText.text('('+panierCount+')');
        }
    });
});

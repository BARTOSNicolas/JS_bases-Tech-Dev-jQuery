console.log("exercice 5");

$(document).ready(function () {
    ////// PLAYER //////
    // -- Player Choice --
    function getPlayerChoice(choice) {
        let playerChoice = '';
        playerChoice = choice.attr("alt").toLowerCase();
        console.log(playerChoice);
        return playerChoice;
    }

    // -- Affiche Player Choice --
    function showPlayerChoice(choice) {
        let img = choice.clone();
        img.removeClass('col-4')
        if ($('#userChoice img')) {
            $('#userChoice img').remove();
            $('#userChoice').append(img);
        } else {
            $('#userChoice').append(img);
        }
    }

    ////// COMPUTER //////


    // -- Random Computer Choice --
    function getComputerChoice() {
        const gameBoard = ['pierre', 'feuille', 'ciseaux'];
        rand = Math.floor(Math.random() * Math.floor(gameBoard.length));
        return gameBoard[rand];
    }

    // -- Affiche le choix du computer
    function showComputerChoice(choice) {
        let img = $('<img>');
        if ($('#computerChoice img')) {
            $('#computerChoice img').remove();
            $('#computerChoice').append(img);
        } else {
            $('#computerChoice').append(img);
        }
        // Bonus affichage de Ouf
        let random = ["pierre", "feuille", "ciseaux", "pierre", "feuille", "ciseaux", "pierre", "feuille", "ciseaux", "pierre", "feuille", "ciseaux", "pierre", "feuille", "ciseaux", "pierre", "feuille", "ciseaux", choice]
        for (let i = 0; i < random.length; i++) {
            setTimeout(function () {
                img.attr('src', 'img/' + random[i] + '.svg');
                img.attr('alt', random[i]);
                i++
                if (i === random.length) {
                    $('#choice button').removeAttr('disabled');
                }
            }, 100 * i)
        }
    }

    ////// Affichage Résultat //////
    // -- Trouve le Winner --
    function findWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            $('#tied').slideDown();
        } else {
            if (playerChoice === 'pierre' && computerChoice === 'ciseaux') {
                $('#win').slideDown();
                score[0]++;
                $('#score span:eq(0)').text(score[0]);


            } else if (playerChoice === "feuille" && computerChoice === "rock") {
                $('#win').slideDown();
                score[0]++;
                $('#score span:eq(0)').text(score[0]);

            } else if (playerChoice === "ciseau" && computerChoice === "feuille") {
                $('#win').slideDown();
                score[0]++;
                $('#score span:eq(0)').text(score[0]);

            } else {
                $('#lose').slideDown();
                score[1]++;
                $('#score span:eq(1)').text(score[1]);
            }
        }
    }

    // -- Cacher les resultat --
    function resultatOff() {
        $('#tied').hide();
        $('#win').hide();
        $('#lose').hide();
    }

    ////// GAME //////
    //-- Round --
    let round = 0;
    // -- Score --
    let score = [0, 0];
    // -- Execute au click --
    $("#choice img").each(function () {
        $(this).on('click', function () {
            //Game
            resultatOff();
            round++;
            $('#round span').text(round);
            $('#choice button').attr('disabled', true);

            //Player
            let playerChoice = getPlayerChoice($(this));
            showPlayerChoice($(this));

            //Computer
            let computerChoice = getComputerChoice();
            showComputerChoice(computerChoice);

            //Result timeout
            setTimeout(function () {
                findWinner(playerChoice, computerChoice);
            }, 2200)
        })
    })

})


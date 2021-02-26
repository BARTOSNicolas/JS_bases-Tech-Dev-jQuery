console.log("exercice 6");
$(document).ready(function(){

    let formulaire = $('#formulaire');
    let email = $('input[name="email"]');
    let password = $('input[name="password"]');

    formulaire.submit(function (event) {
        event.preventDefault(); //Annule le clique
        $('.alert').remove();
        function createErrorMsg(text, where){
            let err = $('<div></div>');
            err.addClass('alert alert-danger');
            err.text(text);
            where.after(err);
        }


        if (email.val() === '') {
            createErrorMsg('Email obligatoire', email);
        }else if (!checkMail(email.val())){
            createErrorMsg('Entrez un vrai email', email)
        }
        if(password.val() === '') {
            createErrorMsg('Password Obligatoire', password)
        }else if (password.val().length < 6){
            createErrorMsg('Plus de 6 charactères', password)
        }
        if (email.val() === 'hello@me.com' && password.val() === 'secret8'){
            alert('Vous êtes conncté !!! (ou pas)')
        }

    });

    function checkMail(mail)
    {
        var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
        return(reg.test(mail));
    }

})

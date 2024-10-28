window.onload = function (e) {

    var txtBotao = document.getElementById("txtBotao");

    var txtEmail = document.getElementById("txtEmailRecuperarSenha");

    txtEmail.focus();

    txtBotao.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {
            exibirMensagemErro("Email Inválido");
        }

        else {
            realizarLogin( email );

        }

    }

    function exibirMensagemErro(mensagem) {

        var txtErro = document.getElementById("txtErro");

        txtErro.innerText = mensagem;

        txtErro.style.display = "block";

        setTimeout(function () {
            txtErro.style.display = "none";
        }, 5000);
    }

    function realizarLogin(email) {
        alert("Email de recuperação enviado");
    }
 }
window.onload = function (e) {

    var btn1Entrar = document.getElementById("btn1Entrar");

    var txtEmail = document.getElementById("txtEmail");

    var txtSenha = document.getElementById("txtSenha");

    txtEmail.focus();

    btn1Entrar.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;
        var senha = txtSenha.value;

        if (email == "") {
            exibirMesagemErro("Campo E-mail obrigatório.");

        }

        else if (senha == "") {
            exibirMesagemErro("Campo senha obrigatório.");

        }

        else {
            realizarLogin(email, senha);

        }
    };

    function exibirMesagemErro(mensagem) {

        var txtErro = document.getElementById("txtErro");

        txtErro.innerText = mensagem;

        txtErro.style.display = "block";

        setTimeout(function () {
            txtErro.style.display = "none";
        }, 5000);


    }

    function realizarLogin(email, senha) {

        alert("O login foi realizado");
    }

}
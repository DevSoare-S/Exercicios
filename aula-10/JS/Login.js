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

        var data = JSON.stringify({
            "email": email,
              "senha": senha
            });

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://localhost:7152/api/usuario/login");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
    }

}
window.onload = function (e) {

    var txtNome = document.getElementById("txtNome");

    var botaoEntrar = document.getElementById("botaoEntrar");

    txtNome.focus();

    botaoEntrar.onclick = function (e) {

        var nome = txtNome.value;

        olaMundoPersonalizado(nome)
    }

    function olaMundoPersonalizado(nome) {



        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:7089/api/aula9/OlaMundoPersonalizado?nome=" + nome);

        xhr.send();
    }


}
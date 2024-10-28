window.onload = function (e) {

    var txtNumero1 = document.getElementById("txtNumero1");

    var txtNumero2 = document.getElementById("txtNumero2");

    var botaoEntrar = document.getElementById("BotaoEntrar");

    botaoEntrar.onclick = function (e) {

        var numero1 = txtNumero1.value;

        var numero2 = txtNumero2.value;

        var soma = numero1 + numero2;

        somar(soma);
    }

    function somar(soma) {

        // WARNING: For GET requests, body is set to null by browsers.

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:7089/api/aula8/Somar?soma=" + soma);

        xhr.send();
    }
}
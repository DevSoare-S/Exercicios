window.onload = function (e) {

    var botaoEntrar = document.getElementById("botaoEntrar");

    botaoEntrar.onclick = function (e) {

        olaMundo();

    }

    function olaMundo() {

        // WARNING: For GET requests, body is set to null by browsers.

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:7089/api/aula9/olaMundo");

        xhr.send();
    }
    

    
}
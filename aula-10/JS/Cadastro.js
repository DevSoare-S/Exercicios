window.onload = function (e) {

    var txtBotao = document.getElementById("txtBotao");

    var txtNome = document.getElementById("txtNome");

    var txtSobrenome = document.getElementById("txtSobrenome");

    var txtEmailCadastro = document.getElementById("txtEmailCadastro");

    var txtSenhaCadastro = document.getElementById("txtSenhaCadastro");

    var txtCpf = document.getElementById("txtCpf");

    var txtTelefone = document.getElementById("txtTelefone");

    var slc1 = document.getElementById("slc1");

    txtNome.focus();

    txtBotao.onclick = function (e) {

        e.preventDefault();

        var nome = txtNome.value;

        var sobrenome = txtSobrenome.value;

        var email = txtEmailCadastro.value;

        var senha = txtSenhaCadastro.value;

        var cpf = txtCpf.value;

        var telefone = txtTelefone.value;

        var slc = slc1.value;

        if (nome == "") {
            exibirMensagemErro("Informe o Nome");
        }

        else if (sobrenome == "") {
            exibirMensagemErro("Informe o Sobrenome");
        }

        else if (email == "") {
            exibirMensagemErro("Informe o Email");
        }

        else if (senha == "") {
            exibirMensagemErro("Informe a Senha");
        }

        else if (cpf == "") {
            exibirMensagemErro("Informe o CPF");
        }

        else if (telefone == "") {
            exibirMensagemErro("Informe o Telefone");
        }

        else {
            cadastrar(nome, email, senha, cpf, telefone, slc);
        }

    };

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);

    }
       function cadastrar(nome, email, senha, cpf, telefone, slc) {

        alert("O cadastro foi realizado");
       }
}
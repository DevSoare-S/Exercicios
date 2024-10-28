using Projeto_Back_End.Models;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace Projeto_Back_End.Controllers
{
    [Route("api/usuario")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        [Route("login")]
        [HttpPost]

        public LoginResult Login(LoginRequest request)
        {
            var result = new LoginResult();

            result.sucesso = true;
            result.mensagem = "Login realizado com sucesso";

            return result;
        }

        [Route("cadastro")]
        [HttpPost]

        public CadastroResult Cadastro(CadastroRequest request)
        {

            var result = new CadastroResult();

            result.mensagem = "O Cadastro foi realizado!";

            result.sucesso = true;
            

            return result;
        }

        [Route("esqueceuSenha")]
        [HttpPost]
        public EsqueceuSenhaResult EsqueceuSenha(EsqueceuSenhaRequest request)
        {
            var result = new EsqueceuSenhaResult();

            result.mensagem = "E-mail enviado com sucesso!";
            result.sucesso = true;

            return result;

        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using projeto_inicial.Domains;
using projeto_inicial.Interfaces;
using projeto_inicial.Repositories;
using projeto_inicial.ViewModel;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace projeto_inicial.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository _login { get; set; }

        public LoginController()
        {
            _login = new UsuarioRepository();
        }


        [HttpPost]
        public IActionResult Post(LoginViewModel login)
        {
            try
            {

                Usuario usuarioBuscado = _login.login(login.Email, login.Senha);

                if (usuarioBuscado == null)

                {

                    return NotFound("E-mail ou senha inválidos!");
                }

                var claims = new[]

                 {

                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),


                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),

                };


                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("projeto_inicial_chave_autenticacao"));


                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);


                var token = new JwtSecurityToken(
                    issuer: "projeto_inicial",
                    audience: "projeto_inicial",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds
                );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}

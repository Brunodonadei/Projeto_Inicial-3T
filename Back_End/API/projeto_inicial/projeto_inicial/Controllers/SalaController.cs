using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using projeto_inicial.Domains;
using projeto_inicial.Interfaces;
using projeto_inicial.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_inicial.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class SalaController : ControllerBase
    {
        private ISalaRepository _sala { get; set; }

        public SalaController()
        {
            _sala = new SalaRepository();
        }

        [HttpGet]
        public IActionResult listarSala()
        {
            try
            {
                return Ok(_sala.listar());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpPost]
        public IActionResult cadastrarSala(Sala novaSala)
        {
            try
            {
                _sala.Cadastrar(novaSala);
                return StatusCode(201);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpPut("{id}")]
        public IActionResult atualizarSala(int id, Sala SalaAtualizada)
        {
            try
            {
                _sala.Atualizar(id, SalaAtualizada);
                return StatusCode(204);
                    
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult deletarSala(int id)
        {
            try
            {
                _sala.Deletar(id);
                return StatusCode(204);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
        
    }
}

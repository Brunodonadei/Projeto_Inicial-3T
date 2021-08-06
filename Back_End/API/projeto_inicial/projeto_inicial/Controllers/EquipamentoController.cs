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
    public class EquipamentoController : ControllerBase
    {
        private IEquipamentoRepository _equipamento { get; set; }

        public EquipamentoController()
        {
            _equipamento = new EquipamentoRepository();
        }

        [HttpGet]
        public IActionResult list()
        {
            try
            {
                return Ok(_equipamento.listarEquipamento());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }


        [HttpPost]
        public IActionResult cadastrarEquipamento(Equipamento novoEquipamento)
        {
            try
            {
                _equipamento.Cadastrar(novoEquipamento);
                return StatusCode(201);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpPut("{id}")]
        public IActionResult atualizarEquipamento(int id, Equipamento EquipamentoAtualizado)
        {
            try
            {
                _equipamento.Atualizar(id, EquipamentoAtualizado);
                return StatusCode(204);

            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult deletarEquipamento(int id)
        {
            try
            {
                _equipamento.Deletar(id);
                return StatusCode(204);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }


    }


}

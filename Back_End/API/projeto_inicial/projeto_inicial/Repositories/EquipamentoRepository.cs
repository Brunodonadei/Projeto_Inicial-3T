using projeto_inicial.Context;
using projeto_inicial.Domains;
using projeto_inicial.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_inicial.Repositories
{
    public class EquipamentoRepository : IEquipamentoRepository
    {
        GufiContext ctx = new GufiContext();

        public void Atualizar(int id, Equipamento EquipamentoAtualizado)
        {
            Equipamento EquipamentoBuscado = ctx.Equipamentos.Find(id);

            if (EquipamentoAtualizado.MarcaEquipamento != null)
            {
                EquipamentoBuscado.MarcaEquipamento = EquipamentoAtualizado.MarcaEquipamento;
            }

            if (EquipamentoAtualizado.TipoEquipamento != null)
            {
                EquipamentoBuscado.TipoEquipamento = EquipamentoAtualizado.TipoEquipamento;
            }

            if (EquipamentoAtualizado.NumeroSerie != null)
            {
                EquipamentoBuscado.NumeroSerie = EquipamentoAtualizado.NumeroSerie;
            }

            if (EquipamentoAtualizado.DescricaoEquipamento != null)
            {
                EquipamentoBuscado.DescricaoEquipamento = EquipamentoAtualizado.DescricaoEquipamento;
            }

            if (EquipamentoAtualizado.NumeroPatrimonio != null)
            {
                EquipamentoBuscado.NumeroPatrimonio = EquipamentoAtualizado.NumeroPatrimonio;
            }

            if (EquipamentoAtualizado.StatusEquipamento != null)
            {
                EquipamentoBuscado.StatusEquipamento = EquipamentoAtualizado.StatusEquipamento;
            }

            ctx.Equipamentos.Update(EquipamentoBuscado);
            ctx.SaveChanges();
        }

        public void Cadastrar(Equipamento novoEquipamento)
        {
            ctx.Equipamentos.Add(novoEquipamento);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Equipamento EquipamentoBuscado = ctx.Equipamentos.Find(id);
            ctx.Equipamentos.Remove(EquipamentoBuscado);
            ctx.SaveChanges();
        }

        public List<Equipamento> listarEquipamento()
        {
            return ctx.Equipamentos.ToList();
        }
    }
}

using projeto_inicial.Context;
using projeto_inicial.Domains;
using projeto_inicial.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_inicial.Repositories
{
    public class SalaRepository : ISalaRepository
    {
        GufiContext ctx = new GufiContext();

        public void Atualizar(int id, Sala SalaAtualizada)
        {
            Sala SalaBuscada = ctx.Salas.Find(id);

            if (SalaAtualizada.AndarSala != null)
            {
                SalaBuscada.AndarSala = SalaAtualizada.AndarSala;
            }

            if (SalaAtualizada.NomeSala != null)
            {
                SalaBuscada.NomeSala = SalaAtualizada.NomeSala;
            }
            
            if (SalaAtualizada.MetragemSala != null)
            {
                SalaBuscada.MetragemSala = SalaAtualizada.MetragemSala;
            }
            ctx.Salas.Update(SalaBuscada);
            ctx.SaveChanges();
        }

        public Sala BuscarPorId(int idSala)
        {
            return ctx.Salas.FirstOrDefault(s => s.IdSala == idSala);
            
        }

        public void Cadastrar(Sala novaSala)
        {
            ctx.Salas.Add(novaSala);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Salas.Remove(BuscarPorId(id));
            ctx.SaveChanges();
        }

        public List<Sala> listar()
        {
            return ctx.Salas.ToList();
        }
    }
}

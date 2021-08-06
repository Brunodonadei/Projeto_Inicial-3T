using projeto_inicial.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_inicial.Interfaces
{
    interface ISalaRepository
    {
        List<Sala> listar();

        void Cadastrar(Sala novaSala);

        void Atualizar(int id, Sala SalaAtualizada);

        void Deletar(int id);

        Sala BuscarPorId(int idSala);
    }
}

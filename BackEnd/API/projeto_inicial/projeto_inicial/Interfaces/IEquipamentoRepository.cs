using projeto_inicial.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_inicial.Interfaces
{
    interface IEquipamentoRepository
    {
        List<Equipamento> listarEquipamento();


        void Cadastrar(Equipamento novoEquipamento);

        void Atualizar(int id, Equipamento EquipamentoAtualizado);

        void Deletar(int id);
    }
}

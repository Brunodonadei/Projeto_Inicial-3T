using projeto_inicial.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_inicial.Interfaces
{
    interface IUsuarioRepository
    {
        Usuario login(string email, string senha);
    }
}

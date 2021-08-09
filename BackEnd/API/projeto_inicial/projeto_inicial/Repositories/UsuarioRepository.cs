using projeto_inicial.Context;
using projeto_inicial.Domains;
using projeto_inicial.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_inicial.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        GufiContext ctx = new GufiContext(); 

        public Usuario login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(s => s.Email == email && s.Senha == senha);
        }
    }
}

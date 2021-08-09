using System;
using System.Collections.Generic;

#nullable disable

namespace projeto_inicial.Domains
{
    public partial class Usuario
    {
        public int IdUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}

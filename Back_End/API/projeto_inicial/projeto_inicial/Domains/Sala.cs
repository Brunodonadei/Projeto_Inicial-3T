using System;
using System.Collections.Generic;

#nullable disable

namespace projeto_inicial.Domains
{
    public partial class Sala
    {
        public int IdSala { get; set; }
        public int AndarSala { get; set; }
        public string NomeSala { get; set; }
        public double? MetragemSala { get; set; }
    }
}

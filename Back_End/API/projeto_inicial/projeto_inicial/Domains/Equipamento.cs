using System;
using System.Collections.Generic;

#nullable disable

namespace projeto_inicial.Domains
{
    public partial class Equipamento
    {
        public int IdEquipamento { get; set; }
        public string MarcaEquipamento { get; set; }
        public string TipoEquipamento { get; set; }
        public int NumeroSerie { get; set; }
        public string DescricaoEquipamento { get; set; }
        public int NumeroPatrimonio { get; set; }
        public bool StatusEquipamento { get; set; }
    }
}

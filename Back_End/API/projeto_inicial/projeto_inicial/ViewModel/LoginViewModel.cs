using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace projeto_inicial.ViewModel
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Email nao preenchido")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Senha nao preenchida")]
        public string Senha { get; set; }
    }
}

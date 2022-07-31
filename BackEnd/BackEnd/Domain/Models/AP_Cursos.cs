using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Domain.Models
{
    public class AP_Cursos
    {
        
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string nombre { get; set; }

        [Required]
        [Column(TypeName = "varchar(200)")]
        public string descripcion { get; set; }

        [Required]
        public bool obligatoriedad { get; set; }

        
    }

   
}

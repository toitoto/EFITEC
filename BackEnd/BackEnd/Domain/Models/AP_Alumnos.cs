using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Domain.Models
{
    public class AP_Alumnos
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string apellidos { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string nombres { get; set; }

        [Required]
        public DateTime fecha_de_nacimiento { get; set; }

        [Required]
        [Column(TypeName = "char(1)")]
        public string sexo { get; set; }
        public int activo { get; set; }

        public List<AP_Notas> listaAP_Notas { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Domain.Models
{
    public class AP_Notas
    {
        public int Id { get; set; }

        public decimal primera_practica { get; set; }

        public decimal segunda_practica { get; set; }

        public decimal tercera_practica { get; set; }

        public decimal examen_parcial { get; set; }

        public decimal examen_final { get; set; }

        public decimal promedio_final { get; set; }

        public int AP_AlumnosId { get; set; }

        public AP_Alumnos AP_Alumnos { get; set; }

        public int AP_CursosId { get; set; }

        public AP_Cursos AP_Cursos { get; set; }

    }
}

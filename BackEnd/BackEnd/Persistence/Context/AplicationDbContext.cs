using BackEnd.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Persistence.Context
{
    public class AplicationDbContext: DbContext
    {
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<AP_Alumnos> AP_Alumnos { get; set; }
        public DbSet<AP_Cursos> AP_Cursos { get; set; }
        public DbSet<AP_Notas> AP_Notas { get; set; }
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options)
        {

        }
    }
}

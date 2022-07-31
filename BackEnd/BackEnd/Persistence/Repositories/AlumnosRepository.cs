using BackEnd.Domain.IRepositories;
using BackEnd.Domain.Models;
using BackEnd.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Persistence.Repositories
{
    public class AlumnosRepository : IAlumnosRepository
    {

        private readonly AplicationDbContext _context;

        public AlumnosRepository(AplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreateAlumno(AP_Alumnos alumno)
        {
            _context.Add(alumno);
            await _context.SaveChangesAsync();
        }

        public async Task<AP_Alumnos> GetAlumno(int idAlumno)
        {
            var alumno = await _context.AP_Alumnos.Where(x => x.Id == idAlumno)
                                    .FirstOrDefaultAsync();
            return alumno;
        }

        public async Task UpdatePassword(Usuario usuario)
        {
            _context.Update(usuario);
            await _context.SaveChangesAsync();
        }

        public async Task<List<AP_Alumnos>> GetListAlumno()
        {
            var listAlumnos = await _context.AP_Alumnos.Where(x => x.activo == 1)
                                    .Select(o => new AP_Alumnos
                                    {
                                        Id = o.Id,
                                        apellidos = o.apellidos,
                                        nombres = o.nombres,
                                        fecha_de_nacimiento = o.fecha_de_nacimiento,
                                        sexo = o.sexo
                                    }).ToListAsync();
            return listAlumnos;
        }

        public async Task deleteAlumno(AP_Alumnos alumno)
        {
            alumno.activo = 0;
            _context.Entry(alumno).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAlumno(AP_Alumnos alumno)
        {
            _context.Update(alumno);
            await _context.SaveChangesAsync();
        }
    }
}

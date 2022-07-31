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
    public class CursosRepository : ICursosRepository
    {

        private readonly AplicationDbContext _context;

        public CursosRepository(AplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreateCurso(AP_Cursos curso)
        {
            _context.Add(curso);
            await _context.SaveChangesAsync();
        }


        public async Task<AP_Cursos> GetCurso(int idCurso)
        {
            var curso = await _context.AP_Cursos.Where(x => x.Id == idCurso)
                                    .FirstOrDefaultAsync();
            return curso;
        }

        public async Task<List<AP_Cursos>> GetListCurso()
        {
            var listCursos = await _context.AP_Cursos
                                    .Select(o => new AP_Cursos
                                    {
                                        Id = o.Id,
                                        nombre = o.nombre,
                                        descripcion = o.descripcion,
                                        obligatoriedad = o.obligatoriedad
                                    }).ToListAsync();
            return listCursos;
        }
    }
}

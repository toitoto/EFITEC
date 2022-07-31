using BackEnd.Domain.IRepositories;
using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class CursosService : ICursosService
    {
        private readonly ICursosRepository _cursosRepository;
        public CursosService(ICursosRepository cursosRepository)
        {
            _cursosRepository = cursosRepository;
        }

        public async Task CreateCurso(AP_Cursos curso)
        {
            await _cursosRepository.CreateCurso(curso);
        }

        public async Task<AP_Cursos> GetCurso(int idCurso)
        {
            return await _cursosRepository.GetCurso(idCurso);
        }

        public async Task<List<AP_Cursos>> GetListCurso()
        {
            return await _cursosRepository.GetListCurso();
        }

    }
}

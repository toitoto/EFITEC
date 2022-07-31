using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.IServices
{
    public interface ICursosService
    {
        Task CreateCurso(AP_Cursos curso);
        Task<AP_Cursos> GetCurso(int idCurso);
        Task<List<AP_Cursos>> GetListCurso();
    }
}

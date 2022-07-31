using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.IServices
{
    public interface IAlumnosService
    {
        Task CreateAlumno(AP_Alumnos alumno);
        Task<AP_Alumnos> GetAlumno(int idAlumno);
        Task UpdateAlumno(AP_Alumnos alumno);
        Task deleteAlumno(AP_Alumnos alumno);
        Task<List<AP_Alumnos>> GetListAlumno();
    }
}

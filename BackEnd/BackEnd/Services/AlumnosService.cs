using BackEnd.Domain.IRepositories;
using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class AlumnosService: IAlumnosService
    {
        private readonly IAlumnosRepository _alumnosRepository;
        public AlumnosService(IAlumnosRepository alumnosRepository)
        {
            _alumnosRepository = alumnosRepository;
        }

        public async Task CreateAlumno(AP_Alumnos alumno)
        {
            await _alumnosRepository.CreateAlumno(alumno);
        }

        public async Task deleteAlumno(AP_Alumnos alumno)
        {
            await _alumnosRepository.deleteAlumno(alumno);
        }

        public async Task<AP_Alumnos> GetAlumno(int idAlumno)
        {
            return await _alumnosRepository.GetAlumno(idAlumno);
        }

        public async Task<List<AP_Alumnos>> GetListAlumno()
        {
            return await _alumnosRepository.GetListAlumno();
        }

        public async Task UpdateAlumno(AP_Alumnos alumno)
        {
            await _alumnosRepository.UpdateAlumno(alumno);
        }
    }
}

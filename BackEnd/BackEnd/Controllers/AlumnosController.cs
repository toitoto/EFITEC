using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using BackEnd.Utils;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumnosController : ControllerBase
    {
        private readonly IAlumnosService _alumnosService;
        public AlumnosController(IAlumnosService alumnosService)
        {
            _alumnosService = alumnosService;
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Post([FromBody] AP_Alumnos alumno)
        {
            try
            {
                await _alumnosService.CreateAlumno(alumno);
                return Ok(new { message = "Alumno registrado con éxito" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{idAlumno}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Get(int idAlumno)
        {
            try
            {
                var alumno = await _alumnosService.GetAlumno(idAlumno);

                return Ok(new { alumno = alumno });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("GetListAlumno")]
        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetListAlumno()
        {
            try
            {
                var listaAlumnos = await _alumnosService.GetListAlumno();

                return Ok(new { listaAlumnos = listaAlumnos });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("UpdateAlumno")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPut]
        public async Task<IActionResult> UpdateAlumno([FromBody] AP_Alumnos alumno)
        {
            try
            {
                await _alumnosService.UpdateAlumno(alumno);
                return Ok(new { message = "Alumno actualizado con éxito" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{idAlumno}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeleteAlumno(int idAlumno)
        {
            try
            {
                var alumno = await _alumnosService.GetAlumno(idAlumno);

                if (alumno == null)
                {
                    return BadRequest(new { message = "No se encontró ningún alumno" });
                }

                await _alumnosService.deleteAlumno(alumno);

                return Ok(new { message = "Alumno eliminado con éxito" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }

}

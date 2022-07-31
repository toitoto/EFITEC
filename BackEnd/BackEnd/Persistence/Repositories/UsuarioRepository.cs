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
    public class UsuarioRepository: IUsuarioRepository
    {
        private readonly AplicationDbContext _context;
        public UsuarioRepository(AplicationDbContext context)
        {
            _context = context;
        }


        public async Task<bool> ExistenceUser(Usuario usuario)
        {
            var existe = await _context.Usuario.AnyAsync(x => x.Nombre == usuario.Nombre);
            return existe;
        }

        public async Task SaveUser(Usuario usuario)
        {
            _context.Add(usuario);
            await _context.SaveChangesAsync();
        }

        public async Task UpdatePassword(Usuario usuario)
        {
            _context.Update(usuario);
            await _context.SaveChangesAsync();
        }

        public async Task<Usuario> ValidatePassword(int id, string oldPassword)
        {
            var usuario = await _context.Usuario.Where(x => x.Id == id && x.Password == oldPassword).FirstOrDefaultAsync();
            return usuario;
        }
    }
}

using BackEnd.Domain.IRepositories;
using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;
        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }


        public async Task<bool> ExistenceUser(Usuario usuario)
        {
            return await _usuarioRepository.ExistenceUser(usuario);
        }

        public async Task SaveUser(Usuario usuario)
        {
            await _usuarioRepository.SaveUser(usuario);
        }

        public async Task UpdatePassword(Usuario usuario)
        {
            await _usuarioRepository.UpdatePassword(usuario);
        }

        public async Task<Usuario> ValidatePassword(int id, string oldPassword)
        {
            return await _usuarioRepository.ValidatePassword(id, oldPassword);
        }
    }
}

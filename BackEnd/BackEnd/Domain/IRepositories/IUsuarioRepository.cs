﻿using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.IRepositories
{
    public interface IUsuarioRepository
    {
        Task SaveUser(Usuario usuario);
        Task<bool> ExistenceUser(Usuario usuario);
        Task<Usuario> ValidatePassword(int id, string oldPassword);
        Task UpdatePassword(Usuario usuario);

    }
}

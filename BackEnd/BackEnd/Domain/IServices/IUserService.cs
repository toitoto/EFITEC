﻿using BackEnd.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.IServices
{
    public interface IUserService
    {
        bool IsValid(LoginRequestDTO req);

    }
}

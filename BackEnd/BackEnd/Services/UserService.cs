using BackEnd.Domain.IServices;
using BackEnd.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class UserService: IUserService
    {


        public bool IsValid(LoginRequestDTO req)
        {
            return true;
        }
    }
}

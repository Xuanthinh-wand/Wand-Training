using ConnectDbAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ConnectDbAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly TodoContext _context;
        public static User user = new User();

        public AuthController(TodoContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("register")]
        public async Task<ActionResult<User>> Register(User request)
        {
                user.UserName = request.UserName;
                user.Password = request.Password;

                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return Ok();
        }
    }
}

using AuthorizeAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AuthorizeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public static User user = new User();

        private readonly TodoContext _context;
        
        public AuthController(TodoContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("register")]
        public async Task<ActionResult<User>> Resgiter(User request)
        {
            var checkUser = _context.Users.Where(u => u.UserName == request.UserName).Any();
            if(checkUser) {
                return BadRequest("Tên đăng nhập đã tồn tại");
            }

            
            user.UserName = request.UserName;
            user.Password = request.Password;

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }
    }
}

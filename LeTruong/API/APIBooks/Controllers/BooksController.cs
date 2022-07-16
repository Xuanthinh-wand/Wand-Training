using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIBooks.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIBooks.ViewModel;

namespace APIBooks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookContext _context;

        public BooksController(BookContext context) {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetListBook() {
            if(_context.Books == null) {
                return NotFound();
            }

            return await _context.Books.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id) {

            if(_context.Books == null) {
                return NotFound();
            }

            var book = await _context.Books.FindAsync(id);

            if(book == null) {
                return NotFound();
            }

            return book;
        }

        [HttpPost]
        public async Task<ActionResult<List<Book>>> PostBook(CreateBookViewModel request)
        {
            var author = await _context.Authors.FindAsync(request.AuthorId);
            if (author == null)
            {
                return NotFound();
            }

            var newBook = new Book
            {
                Name = request.Name,
                PublishedDate = request.PublishedDate,
                AuthorId = author.Id,
            };
            _context.Books.Add(newBook);
            await _context.SaveChangesAsync();

            // var result = 
            //Trả về thông báo
            // return Ok(new { message = "Thành công" })

            // Lấy ra book vừa thêm
            return CreatedAtAction("GetListBook", new { id = newBook.Id }, request);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Book>> PutBook(int id, Book book) {
            if(id != book.Id) {
                return BadRequest("Không có sách này");
            }
            if(book.AuthorId > 0) {
                var author = await _context.Authors.FindAsync(book.AuthorId);
                if (author == null)
                {
                    return NotFound();
                }
            }
            _context.Entry(book).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(new { message = "Sửa thành công" });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            if (_context.Books == null)
            {
                return NotFound();
            }
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Xoá thành công" });
        }
    }
}
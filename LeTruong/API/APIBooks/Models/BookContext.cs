using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace APIBooks.Models
{
    public class BookContext : DbContext
    {
        public BookContext(DbContextOptions<BookContext> options)
        : base(options)
        {}
        public DbSet<Book>Books { get; set; } = null!;
        public DbSet<Author> Authors { get; set; } = null!;
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace APIBooks.Models
{
    public class Book
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public DateTime? PublishedDate { get; set; }

        public Author? Author { get; set; }

        public int AuthorId { get; set; }

    }
}
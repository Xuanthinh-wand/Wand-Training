using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIBooks.ViewModel
{
    public class CreateBookViewModel
    {
       public string Name {get; set;}

       public DateTime? PublishedDate { get; set; }

       public int AuthorId { get; set; }
    }
}
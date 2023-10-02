using Microsoft.Extensions.Hosting;

namespace webapi.Models
{
    public class Document:BaseEntity
    {
        public string Title { get; set; }
        public int OwnerId { get; set; }
        public bool IsPublic { get; set; }
        public ICollection<Document> Documents { get; } = new List<Document>();
    }
}

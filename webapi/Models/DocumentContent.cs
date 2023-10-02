using System.Reflection.Metadata;

namespace webapi.Models
{
    public class DocumentContent:BaseEntity
    {
        public string Content { get; set; }
        public int OwnerId { get; set; }
        public int DocumentId { get; set; }
        public Document Document { get; set; } = null!;
    }
}

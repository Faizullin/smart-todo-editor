using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentContentsController : ControllerBase
    {
        private readonly DocumentDbContext _context;

        public DocumentContentsController(DocumentDbContext context)
        {
            _context = context;
        }

        // GET: api/DocumentContents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DocumentContent>>> GetDocumentContent()
        {
          if (_context.DocumentContent == null)
          {
              return NotFound();
          }
            return await _context.DocumentContent.ToListAsync();
        }

        // GET: api/DocumentContents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DocumentContent>> GetDocumentContent(int id)
        {
          if (_context.DocumentContent == null)
          {
              return NotFound();
          }
            var documentContent = await _context.DocumentContent.FindAsync(id);

            if (documentContent == null)
            {
                return NotFound();
            }

            return documentContent;
        }

        // PUT: api/DocumentContents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocumentContent(int id, DocumentContent documentContent)
        {
            if (id != documentContent.Id)
            {
                return BadRequest();
            }

            _context.Entry(documentContent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DocumentContentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DocumentContents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DocumentContent>> PostDocumentContent(DocumentContent documentContent)
        {
          if (_context.DocumentContent == null)
          {
              return Problem("Entity set 'DocumentDbContext.DocumentContent'  is null.");
          }
            _context.DocumentContent.Add(documentContent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDocumentContent", new { id = documentContent.Id }, documentContent);
        }

        // DELETE: api/DocumentContents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDocumentContent(int id)
        {
            if (_context.DocumentContent == null)
            {
                return NotFound();
            }
            var documentContent = await _context.DocumentContent.FindAsync(id);
            if (documentContent == null)
            {
                return NotFound();
            }

            _context.DocumentContent.Remove(documentContent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DocumentContentExists(int id)
        {
            return (_context.DocumentContent?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

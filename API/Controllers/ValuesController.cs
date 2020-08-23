using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;

        public ValuesController(DataContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> Get()
        {
            List<Value> values = await _context.Values.ToListAsync();
            return Ok(values);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Value>> Get(int id)
        {
            Value value = await _context.Values.FirstOrDefaultAsync(v => v.Id == id);
            return value;
        }
    }
}
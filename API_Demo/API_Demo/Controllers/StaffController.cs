using API_Demo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace API_Demo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StaffController : ControllerBase
    {
        private readonly DemoContext _context;
        public StaffController(DemoContext context)
        {
            _context = context;
        }


        [HttpGet("id")]
        public async Task<ActionResult<Staff>> GetById(int id)
        {
            return Ok(await _context.Staff.Where(w => w.Id == id).FirstOrDefaultAsync());
        }

        [HttpGet]
        public async Task<ActionResult<List<Staff>>> Get(string search)
        {
            List<Staff> listStaff = new List<Staff>();

            if (!string.IsNullOrEmpty(search))
            {

                listStaff = await _context.Staff.Where(w => w.FullName.Contains(search) || w.ShortName.Contains(search)).ToListAsync();
            }
            else
            {
                listStaff = await _context.Staff.ToListAsync();
            }

            return Ok(listStaff);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Staff staff)
        {
            await _context.Staff.AddAsync(staff);
            _context.SaveChanges();
            return Ok(staff);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Staff staff)
        {
           
            if (id != staff.Id)
            {
                return BadRequest();
            }

            var data = await _context.Staff.Where(d => d.Id == id).FirstOrDefaultAsync();

            if (data == null){
                return BadRequest();
            }

            data.FullName = staff.FullName;
            data.ShortName = staff.ShortName;
            _context.SaveChanges();
            return Ok(data);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            var staff = await _context.Staff.Where(d => d.Id == id).FirstOrDefaultAsync();

            if (staff == null)
            {
                return BadRequest();
            }

            _context.Staff.Remove(staff);
            _context.SaveChanges();

            return Ok();
        }


    }
}

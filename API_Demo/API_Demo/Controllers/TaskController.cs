using API_Demo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace API_Demo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly DemoContext _context;
        public TaskController(DemoContext context)
        {
            _context = context;
        }

        [HttpGet("id")]
        public async Task<ActionResult<Models.Task>> GetById(int id)
        {
            return Ok(await _context.Tasks.Where(w => w.Id == id).FirstOrDefaultAsync());
        }

        [HttpGet]
        public async Task<ActionResult<List<Models.Task>>> Get(string search)
        {
            List<Models.Task> listTask = new List<Models.Task>();

            if (!string.IsNullOrEmpty(search))
            {
                listTask = await _context.Tasks.Where(w => w.Name.Contains(search) || w.Label.Contains(search)).ToListAsync();
            }
            else
            {
                listTask = await _context.Tasks.ToListAsync();
            }


            return Ok(await _context.Tasks.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Create(Models.Task task)
        {
            await _context.Tasks.AddAsync(task);
            _context.SaveChanges();
            return Ok(task);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Models.Task task)
        {
           
            if (id != task.Id)
            {
                return BadRequest();
            }

            var taskFind = await _context.Tasks.Where(d => d.Id == id).FirstOrDefaultAsync();

            if (taskFind == null){
                return BadRequest();
            }

            taskFind.Label = task.Label;
            taskFind.Type = task.Type;
            taskFind.Name = task.Name;
            taskFind.StartDate = task.StartDate;
            taskFind.EndDate = task.EndDate;
            taskFind.Duration = task.Duration;
            taskFind.Progress = task.Progress;
            taskFind.Idparent = task.Idparent;
            taskFind.IsUnscheduled = task.IsUnscheduled;
            _context.SaveChanges();

            return Ok(taskFind);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            var task = await _context.Tasks.Where(d => d.Id == id).FirstOrDefaultAsync();

            if (task == null)
            {
                return BadRequest();
            }

            _context.Tasks.Remove(task);
            _context.SaveChanges();

            return Ok();
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> UpdateParent(int id, int idParent)
        {

            var taskFind1 = await _context.Tasks.Where(d => d.Id == id).FirstOrDefaultAsync();

            var taskFind2 = await _context.Tasks.Where(d => d.Id == idParent).FirstOrDefaultAsync();

            if (taskFind1 == null || taskFind2 == null)
            {
                return BadRequest();
            }

          

            taskFind1.Idparent = idParent;
            taskFind2.Idparent = 0;

            _context.SaveChanges();

            return Ok(taskFind1);
        }


    }
}

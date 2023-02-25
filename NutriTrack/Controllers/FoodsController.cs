using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using NutriTrack.DbContext;
using NutriTrack.DbContext.DbModels;

namespace NutriTrack.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FoodsController : ControllerBase
{
    private readonly AppDbContext _context;
    public FoodsController(AppDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public ActionResult<IEnumerable<Food>> GetFoods()
    {
        return _context.Foods;
    }

    [HttpPost]
    public ActionResult<Food> AddFood([FromBody] Food? food)
    {
        if (food == null)
        {
            return BadRequest();
        }

        EntityEntry<Food> entity = _context.Add(food);
        _context.SaveChanges();
        return entity.Entity;
    }
}


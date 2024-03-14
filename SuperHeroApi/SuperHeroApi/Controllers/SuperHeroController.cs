using Microsoft.AspNetCore.Mvc;
using SuperHeroApi.Models;
using SuperHeroApi.Data;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace SuperHeroApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public SuperHeroController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> GetSuperHeroes()
        {
            // return new List<SuperHero>
            // {
            //     new SuperHero
            //     {
            //         Name = "Spider Man",
            //         FirstName = "Peter",
            //         LastName = "Parker",
            //         Place = "New York City"
            //     }
            // };

            return Ok(await _dbContext.SuperHeroes.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<SuperHero>>> CreateSuperHeroes(SuperHero hero)
        {
            _dbContext.SuperHeroes.Add(hero);
            await _dbContext.SaveChangesAsync();

            return Ok(await _dbContext.SuperHeroes.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<SuperHero>>> UpdateSuperHeroes(SuperHero hero)
        {
            var dbHero = await _dbContext.SuperHeroes.FindAsync(hero.Id);
            if (dbHero == null)
            {
                return BadRequest("Hero Not Found");
            }

            dbHero.Name = hero.Name;
            dbHero.FirstName = hero.FirstName;
            dbHero.LastName = hero.LastName;
            dbHero.Place = hero.Place;

            await _dbContext.SaveChangesAsync();

            return Ok(await _dbContext.SuperHeroes.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<SuperHero>>> DeleteSuperHeroes(int id)
        {
            Console.WriteLine("Works");
            var hero = await _dbContext.SuperHeroes.FindAsync(id);

            if (hero == null)
                return BadRequest("Hero not found");

            _dbContext.SuperHeroes.Remove(hero);
            await _dbContext.SaveChangesAsync();
            return Ok(await _dbContext.SuperHeroes.ToListAsync());
        }
    }
}
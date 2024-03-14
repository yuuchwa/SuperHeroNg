using Microsoft.EntityFrameworkCore;
using SuperHeroApi.Models;

namespace SuperHeroApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<SuperHero> SuperHeroes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SuperHero>().HasData(
                new SuperHero { Id = 1, Name = "Spider", FirstName = "Peter", LastName = "Parker", Place = "New York" },
                new SuperHero { Id = 2, Name = "Superman", FirstName = "Clark", LastName = "Kent", Place = "Washington" },
                new SuperHero { Id = 3, Name = "Batman", FirstName = "Bruce", LastName = "Wayne", Place = "Gotham City" }
            );
        }
    }
}
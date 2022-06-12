using MatingApp.Models;
using Microsoft.EntityFrameworkCore;
namespace MatingApp.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options) { }
        public DbSet<Value> Values { get; set; }
    }

}

using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using NutriTrack.DbContext.DbModels;

namespace NutriTrack.DbContext;
public class AppDbContext : Microsoft.EntityFrameworkCore.DbContext
{
    public DbSet<Food> Foods { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = new SqliteConnectionStringBuilder($"Data Source={Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments),"NutriTrack.db")};")
        {
            Mode = SqliteOpenMode.ReadWriteCreate,
        }.ToString();
        SQLitePCL.raw.SetProvider(new SQLitePCL.SQLite3Provider_e_sqlite3());


        Console.WriteLine("connectionString: " + connectionString);
        optionsBuilder.UseSqlite(connectionString);
    }
}
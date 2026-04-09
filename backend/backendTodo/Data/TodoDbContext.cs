using backendTodo.Models;
using Microsoft.EntityFrameworkCore;

namespace backendTodo.Data;

public class TodoDbContext : DbContext
{
    public TodoDbContext(DbContextOptions<TodoDbContext> options) : base(options)
    {
    }

    public DbSet<TaskItem> Tasks { get; set; }
}
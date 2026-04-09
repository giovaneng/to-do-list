using System.ComponentModel.DataAnnotations;

namespace backendTodo.Models;

public class TaskItem
{
    public int Id { get; set; }

    [Required]
    [MaxLength(130)]
    public string Title { get; set; } = string.Empty;

    [MaxLength(400)]
    public string Description { get; set; } = string.Empty;

    [Required]
    public string Priority { get; set; } = string.Empty;

    [Required]
    public string Status { get; set; } = string.Empty;

    public DateTime CreationDate { get; set; } = DateTime.UtcNow;
}
using System;
using System.Collections.Generic;

namespace API_Demo.Models;

public partial class Task
{
    public int Id { get; set; }

    public int? Idparent { get; set; }

    public string? Label { get; set; }

    public string? Type { get; set; }

    public string? Name { get; set; }

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public int? Duration { get; set; }

    public float? Progress { get; set; }

    public bool? IsUnscheduled { get; set; }
}

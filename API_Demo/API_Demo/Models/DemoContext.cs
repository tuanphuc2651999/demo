using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace API_Demo.Models;

public partial class DemoContext : DbContext
{
    public DemoContext()
    {
    }

    public DemoContext(DbContextOptions<DemoContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Staff> Staff { get; set; }

    public virtual DbSet<StaffInTask> StaffInTasks { get; set; }

    public virtual DbSet<Task> Tasks { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSqlServer("Server=localhost;Database=Demo;Trusted_Connection=True;encrypt=false;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Staff>(entity =>
        {
            entity.Property(e => e.FullName).HasMaxLength(50);
            entity.Property(e => e.ShortName).HasMaxLength(50);
        });

        modelBuilder.Entity<StaffInTask>(entity =>
        {
            entity.ToTable("StaffInTask");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Idstaff).HasColumnName("IDStaff");
            entity.Property(e => e.Idtask).HasColumnName("IDTask");
        });

        modelBuilder.Entity<Task>(entity =>
        {
            entity.ToTable("Task");

            entity.Property(e => e.Duration).HasColumnType("int");
            entity.Property(e => e.EndDate).HasColumnType("datetime");
            entity.Property(e => e.Idparent).HasColumnName("IDParent");
            entity.Property(e => e.Label).HasMaxLength(250);
            entity.Property(e => e.Name).HasMaxLength(500);
            entity.Property(e => e.Progress).HasColumnType("float");
            entity.Property(e => e.StartDate).HasColumnType("datetime");
            entity.Property(e => e.Type).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

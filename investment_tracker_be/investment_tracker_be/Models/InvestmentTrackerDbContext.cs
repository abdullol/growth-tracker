using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace investment_tracker_be.Models
{
    public partial class InvestmentTrackerDbContext : DbContext
    {
        public InvestmentTrackerDbContext()
        {
        }

        public InvestmentTrackerDbContext(DbContextOptions<InvestmentTrackerDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<InvestmentFundLog> InvestmentFundLogs { get; set; }
        public virtual DbSet<TrackerLookup> TrackerLookups { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=A-STATION;Database=InvestmentTrackerDb;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<InvestmentFundLog>(entity =>
            {
                entity.HasKey(e => e.LogId)
                    .HasName("PK__investme__7839F64D79D38D0C");

                entity.ToTable("investmentFundLogs");

                entity.Property(e => e.LogId)
                    .ValueGeneratedNever()
                    .HasColumnName("logId");

                entity.Property(e => e.AssetImageUrl).HasColumnName("assetImageUrl");

                entity.Property(e => e.AssetsClass).HasColumnName("assetsClass");

                entity.Property(e => e.CurrencyId).HasColumnName("currencyId");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .HasColumnName("description");

                entity.Property(e => e.InvestmentAmount)
                    .HasColumnType("decimal(18, 2)")
                    .HasColumnName("investmentAmount");

                entity.Property(e => e.Location)
                    .HasMaxLength(100)
                    .HasColumnName("location");

                entity.Property(e => e.StatusId).HasColumnName("statusId");

                entity.Property(e => e.TransactionPerformDate)
                    .HasColumnType("datetime")
                    .HasColumnName("transactionPerformDate");

                entity.Property(e => e.TransactionPerformedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("transactionPerformedBy");

                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.InvestmentFundLogCurrencies)
                    .HasForeignKey(d => d.CurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__investmen__curre__36B12243");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.InvestmentFundLogStatuses)
                    .HasForeignKey(d => d.StatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__investmen__statu__35BCFE0A");
            });

            modelBuilder.Entity<TrackerLookup>(entity =>
            {
                entity.HasKey(e => e.LookupId)
                    .HasName("PK__TrackerL__EF7CFD4AA54BB019");

                entity.ToTable("trackerLookups");

                entity.Property(e => e.LookupId)
                    .ValueGeneratedNever()
                    .HasColumnName("lookupId");

                entity.Property(e => e.Createddate)
                    .HasColumnType("datetime")
                    .HasColumnName("createddate");

                entity.Property(e => e.HiddenValue)
                    .HasMaxLength(255)
                    .HasColumnName("hiddenValue");

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.Property(e => e.LookupDescription)
                    .HasMaxLength(250)
                    .HasColumnName("lookupDescription");

                entity.Property(e => e.LookupType)
                    .HasMaxLength(250)
                    .HasColumnName("lookupType");

                entity.Property(e => e.VisibleValue)
                    .HasMaxLength(250)
                    .HasColumnName("visibleValue");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

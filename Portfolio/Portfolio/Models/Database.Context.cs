﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Portfolio.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class PortfolioEntities : DbContext
    {
        public PortfolioEntities()
            : base("name=PortfolioEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AboutMe> AboutMe { get; set; }
        public virtual DbSet<AdminsData> AdminsData { get; set; }
        public virtual DbSet<Categories> Categories { get; set; }
        public virtual DbSet<Gallery> Gallery { get; set; }
        public virtual DbSet<Knowledge> Knowledge { get; set; }
        public virtual DbSet<Language> Language { get; set; }
        public virtual DbSet<Messages> Messages { get; set; }
        public virtual DbSet<Portfolio> Portfolio { get; set; }
        public virtual DbSet<Skills> Skills { get; set; }
        public virtual DbSet<Social> Social { get; set; }
    }
}

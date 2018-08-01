//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Portfolio
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Portfolio()
        {
            this.Gallery = new HashSet<Gallery>();
        }
    
        public int Id { get; set; }
        public string Name { get; set; }
        public string Slogan { get; set; }
        public Nullable<int> CategoryId { get; set; }
        public string Lang { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
    
        public virtual Categories Categories { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Gallery> Gallery { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Portfolio.Models
{
    public class MessagesModel
    {        
        [Display(Name = "Name")]
        [Required]
        public string name { get; set; }

        [DataType(DataType.EmailAddress), Display(Name = "Email")]
        [Required]
        public string email { get; set; }

        [Display(Name = "Subject")]
        public string subject { get; set; }

        [DataType(DataType.MultilineText)]
        [Display(Name = "Text")]
        public string text { get; set; }

        [DataType(DataType.DateTime)]
        [Display(Name = "Date")]
        public DateTime date { get; set; }
    }
}
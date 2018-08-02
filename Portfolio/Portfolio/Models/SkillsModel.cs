using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Models
{
    
    public class SkillsModel
    {
        [Display(Name = "Id")]
        public int id { get; set; }

        [Display(Name = "Name")]
        public string name { get; set; }

        [Display(Name = "Icon")]
        public string icon { get; set; }

        [Display(Name = "IsIcon")]
        public bool isicon { get; set; }
    }
}
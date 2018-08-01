using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;
using Portfolio.Filters;

namespace Portfolio.Areas.Admin.Controllers
{
    [Logout]
    public class SkillsController : Controller
    {
        PortfolioEntities db = new PortfolioEntities();
        // GET: Admin/Skills
        public ActionResult Index()
        {
            ViewBag.Skill = db.Skills.ToList();
            ViewBag.Knowladge = db.Knowledge.ToList();
            return View();
        }

        //Adding Knowladge GET
        public ActionResult addKnowladge()
        {
            return View();
        }

        //Adding Knowladge POST
        [HttpPost, ValidateInput(false)]
        public ActionResult addKnowladge(Knowledge knowledge)
        {
            return Content(knowledge.Name+" "+knowledge.Icon+" "+knowledge.IsIcon);
            //if (ModelState.IsValid)
            //{
            //    if (knowledge == null)
            //    {
            //        return Content("Oppan");
            //    }

            //    db.Knowledge.Add(knowledge);
            //    db.SaveChanges();
            //    return RedirectToAction("index");
            //}
            //return View();
        }

        //Deleting Knowladge
        public ActionResult DeleteKnowladge(int id)
        {
            Knowledge knowledge = db.Knowledge.Find(id);
            db.Knowledge.Remove(knowledge);
            db.SaveChanges();
            return RedirectToAction("index");
        }
    }
}
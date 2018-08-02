using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;
using Portfolio.Filters;
using System.Data.Entity;

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
        [HttpPost]
        public ActionResult addKnowladge(Knowledge knowledge)
        {
            if (ModelState.IsValid)
            {
                if (knowledge == null)
                {
                    return Content("Oppan");
                }

                db.Knowledge.Add(knowledge);
                db.SaveChanges();
                return RedirectToAction("index");
            }
            return View();
        }

        //Updating Knowladge GET
        public ActionResult UpdateKnowladge(int id)
        {
            Knowledge knowledge = db.Knowledge.Find(id);
            if (knowledge == null)
            {
                return RedirectToAction("index");
            }
            ViewBag.Knowledge = knowledge;
            return View();
        }

        //Updating Knowladge POST
        [HttpPost, ValidateInput(false)]
        public ActionResult UpdateKnowladge(Knowledge knowledge)
        {

            if (ModelState.IsValid)
            {
                db.Entry(knowledge).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View();
        }
        
        //Deleting Knowladge
        public ActionResult DeleteKnowladge(int id)
        {
            Knowledge knowledge = db.Knowledge.Find(id);
            db.Knowledge.Remove(knowledge);
            db.SaveChanges();
            return RedirectToAction("index");
        }


        //Adding Skill GET
        public ActionResult addSkill()
        {
            return View();
        }

        //Adding Skill POST
        [HttpPost]
        public ActionResult addSkill(Skills skill)
        {
            if (ModelState.IsValid)
            {
                if (skill == null)
                {
                    return Content("Oppan");
                }

                db.Skills.Add(skill);
                db.SaveChanges();
                return RedirectToAction("index");
            }
            return View();
        }

        //Updating Skill GET
        public ActionResult UpdateSkill(int id)
        {
            Skills skill = db.Skills.Find(id);
            if (skill == null)
            {
                return RedirectToAction("index");
            }
            ViewBag.Skill = skill;
            return View();
        }

        //Updating Skill POST
        [HttpPost]
        public ActionResult UpdateSkill(Skills skill)
        {
            if (ModelState.IsValid)
            {
                db.Entry(skill).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View();
        }

        //Deleting Skill
        public ActionResult DeleteSkill(int id)
        {
            Skills skill = db.Skills.Find(id);
            db.Skills.Remove(skill);
            db.SaveChanges();
            return RedirectToAction("index");
        }
    }
}
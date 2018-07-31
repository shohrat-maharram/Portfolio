using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;
using System.Data.Entity;
using Portfolio.Filters;

namespace Portfolio.Areas.Admin.Controllers
{
    [Logout]
    public class PortfolioController : Controller
    {
        PortfolioEntities db = new PortfolioEntities();
        // GET: Admin/Portfolio
        public ActionResult Index()
        {
            ViewBag.Projects = db.Portfolio.ToList();
            ViewBag.Gallery = db.Gallery.ToList();
            ViewBag.Category = db.Categories.ToList();
            return View();
        }

        //Adding Project GET
        public ActionResult addProject()
        {
            ViewBag.Category = db.Categories.ToList();
            ViewBag.Lang = db.Language.ToList();
            return View();
        }

        //Adding Project POST
        [HttpPost, ValidateInput(false)]
        public ActionResult addProject(Models.Portfolio project)
        {
            if (ModelState.IsValid)
            {
                if (project == null)
                {
                    return Content("Oppan");
                }

                db.Portfolio.Add(project);
                db.SaveChanges();
                return RedirectToAction("index");
            }
            return View();
        }

        //Updating About me GET
        public ActionResult UpdateProject(int id)
        {
            Models.Portfolio project = db.Portfolio.Find(id);
            if (project == null)
            {
                return RedirectToAction("index");
            }
            ViewBag.Project = project;
            ViewBag.Lang = db.Language.ToList();
            ViewBag.Category = db.Categories.ToList();
            return View();
        }

        //Updating About me POST
        [HttpPost, ValidateInput(false)]
        public ActionResult UpdateProject(Models.Portfolio project)
        {
            if (ModelState.IsValid)
            {   
                db.Entry(project).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View();
        }

        //Deleting Project
        public ActionResult DeleteProject(int id)
        {
            Models.Portfolio project = db.Portfolio.Find(id);
            db.Portfolio.Remove(project);
            db.SaveChanges();
            return RedirectToAction("index");
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;
using System.Data.Entity;
using Portfolio.Filters;
using System.IO;

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

        //Adding Gallery GET
        public ActionResult AddGallery()
        {
            ViewBag.Project = db.Portfolio.ToList();
            ViewBag.Lang = db.Language.ToList();
            return View();
        }

        //Adding Gallery POST
        [HttpPost, ValidateInput(false)]
        public ActionResult AddGallery(Gallery gallery, HttpPostedFileBase Media)
        {
            if (ModelState.IsValid)
            {
                if (gallery == null || Media == null)
                {
                    return Content("Oppan");
                }

                string mediaTpye = Media.ContentType.Split('/')[1];                             

                if ((mediaTpye != "png") && (mediaTpye != "jpeg") && (mediaTpye != "jpg") && (mediaTpye != "mp4"))
                {
                    Session["InvalidPhotoType"] = true;
                    return RedirectToAction("AddGallery", "portfolio");
                }

                string mediaName = DateTime.Now.ToString("ddMMyyyyHHmmssffff") + Media.FileName;
                string mediaPath = Path.Combine(Server.MapPath("~/Uploads"), mediaName);

                Media.SaveAs(mediaPath);
                gallery.Media = mediaName;                

                db.Gallery.Add(gallery);
                db.SaveChanges();
                return RedirectToAction("index");
            }
            return View();
        }

        //Updating Gallery GET
        public ActionResult UpdateGallery(int id)
        {
            Gallery gallery = db.Gallery.Find(id);
            if (gallery == null)
            {
                return RedirectToAction("index");
            }
            ViewBag.Gallery = gallery;
            ViewBag.Lang = db.Language.ToList();
            ViewBag.Project = db.Portfolio.ToList();
            return View();
        }

        //Updating Gallery POST
        [HttpPost, ValidateInput(false)]
        public ActionResult UpdateGallery(Gallery gallery, HttpPostedFileBase Media, string OldMedia)
        {
            if (ModelState.IsValid)
            {
                if (Media != null)
                {
                    string mediaName = DateTime.Now.ToString("ddMMyyyyHHmmssffff") + Media.FileName;
                    string mediaPath = Path.Combine(Server.MapPath("~/Uploads"), mediaName);
                    string oldMediaPath = Path.Combine(Server.MapPath("~/Uploads"), OldMedia);
                    
                    System.IO.File.Delete(oldMediaPath);
                    Media.SaveAs(mediaPath);
                    gallery.Media= mediaName;

                }
                else
                {
                    gallery.Media= OldMedia;
                }

                db.Entry(gallery).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View();
        }


        //Deleting Gallery
        public ActionResult DeleteGallery(int id)
        {
            Gallery gallery = db.Gallery.Find(id);
            db.Gallery.Remove(gallery);
            db.SaveChanges();
            return RedirectToAction("index");
        }
    }
}
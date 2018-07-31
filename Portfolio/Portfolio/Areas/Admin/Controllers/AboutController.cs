using Portfolio.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;
using System.IO;
using System.Data.Entity;

namespace Portfolio.Areas.Admin.Controllers
{
    [Logout]
    public class AboutController : Controller
    {
        PortfolioEntities db = new PortfolioEntities();
        // GET: Admin/Dashboard
        public ActionResult Index()
        {
            ViewBag.About = db.AboutMe.ToList();
            ViewBag.Admin = db.AdminsData.ToList();
            ViewBag.Social = db.Social.ToList();

            return View();
        }

        //Adding About me GET
        public ActionResult Add()
        {
            ViewBag.Lang = db.Language.ToList();
            return View();
        }

        //Adding About me POST
        [HttpPost, ValidateInput(false)]
        public ActionResult Add(AboutMe about, HttpPostedFileBase Photo, HttpPostedFileBase cv)
        {
            if (ModelState.IsValid)
            {
                if (about == null || Photo == null || cv == null)
                {
                    return Content("Oppan");
                }

                string cvTpye = cv.ContentType.Split('/')[1];
                string photoTpye = Photo.ContentType.Split('/')[1];

                if (cvTpye != "pdf")
                {
                    Session["InvalidCVType"] = true;
                    return RedirectToAction("add", "about");
                }

                if ((photoTpye != "png") && (photoTpye != "jpeg") && (photoTpye != "jpg"))
                {
                    Session["InvalidPhotoType"] = true;
                    return RedirectToAction("add", "about");
                }

                string photoName = DateTime.Now.ToString("ddMMyyyyHHmmssffff") + Photo.FileName;
                string photoPath = Path.Combine(Server.MapPath("~/Uploads"), photoName);

                string cvName = DateTime.Now.ToString("ddMMyyyyHHmmssffff") + cv.FileName;
                string cvPath = Path.Combine(Server.MapPath("~/Uploads"), cvName);

                Photo.SaveAs(photoPath);
                about.Photo = photoName;

                cv.SaveAs(cvPath);
                about.CV = cvName;

                db.AboutMe.Add(about);
                db.SaveChanges();
                return RedirectToAction("index");
            }
            return View();
        }


        //Updating About me GET
        public ActionResult UpdatingAbout(int id)
        {
            AboutMe about = db.AboutMe.Find(id);
            if (about == null)
            {
                return RedirectToAction("index");
            }
            ViewBag.About = about;
            ViewBag.Lang = db.Language.ToList();
            return View();
        }

        //Updating About me POST
        [HttpPost, ValidateInput(false)]
        public ActionResult UpdatingAbout(AboutMe about, HttpPostedFileBase Photo, string OldPhoto, HttpPostedFileBase cv, string Oldcv)
        {
            if (ModelState.IsValid)
            {
                if (Photo != null || cv != null)
                {
                    string photoName = DateTime.Now.ToString("ddMMyyyyHHmmssffff") + Photo.FileName;
                    string photoPath = Path.Combine(Server.MapPath("~/Uploads"), photoName);
                    string oldPhotoPath = Path.Combine(Server.MapPath("~/Uploads"), OldPhoto);

                    string cvName = DateTime.Now.ToString("ddMMyyyyHHmmssffff") + cv.FileName;
                    string cvPath = Path.Combine(Server.MapPath("~/Uploads"), cvName);
                    string oldCvPath = Path.Combine(Server.MapPath("~/Uploads"), Oldcv);

                    System.IO.File.Delete(oldPhotoPath);
                    Photo.SaveAs(photoPath);
                    about.Photo = photoName;

                    System.IO.File.Delete(oldCvPath);
                    cv.SaveAs(cvPath);
                    about.CV = cvName;
                }
                else
                {
                    about.Photo = OldPhoto;
                    about.CV = Oldcv;
                }

                db.Entry(about).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View();
        }


        //Deleting About me
        public ActionResult DeletingAbout(int id)
        {
            AboutMe about = db.AboutMe.Find(id);
            db.AboutMe.Remove(about);
            db.SaveChanges();
            return RedirectToAction("index");
        }

        //Adding Social GET
        public ActionResult AddSocial()
        {
            return View();
        }

        //Adding Social POST
        [HttpPost, ValidateInput(false)]
        public ActionResult AddSocial(Social social)
        {
            if (ModelState.IsValid)
            {
                db.Social.Add(social);
                db.SaveChanges();
                return RedirectToAction("index");
            }
            return View();
        }

        //Deleting Social
        public ActionResult DeletingSocial(int id)
        {
            Social social = db.Social.Find(id);
            db.Social.Remove(social);
            db.SaveChanges();
            return RedirectToAction("index");
        }

        //Loging out
        public ActionResult Logout()
        {
            Session["LoginValid"] = null;
            return RedirectToAction("index", "home");
        }
    }
}
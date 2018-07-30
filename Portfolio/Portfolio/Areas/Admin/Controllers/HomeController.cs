using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;
using System.Web.Helpers;

namespace Portfolio.Areas.Admin.Controllers
{
    public class HomeController : Controller
    {
        PortfolioEntities db = new PortfolioEntities();
        // GET: Admin/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login(AdminsData admn)
        {
            //Hashing password
            //string pass = Crypto.HashPassword("123456");
            //return Content(pass);

            AdminsData loginner = db.AdminsData.FirstOrDefault(a => a.Email == admn.Email);
            if (loginner != null)
            {
                if (Crypto.VerifyHashedPassword(loginner.Password, admn.Password))
                {
                    Session["LoginValid"] = true;
                    return RedirectToAction("index", "dashboard");
                }
            }

            Session["LoginInvalid"] = true;
            return RedirectToAction("index", "home");
        }
    }
}
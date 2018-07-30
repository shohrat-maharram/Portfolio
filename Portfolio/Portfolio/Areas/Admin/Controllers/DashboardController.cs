using Portfolio.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Areas.Admin.Controllers
{
    [Logout]
    public class DashboardController : Controller
    {
        // GET: Admin/Dashboard
        public ActionResult Index()
        {
            return View();
        }


        //Loging out
        public ActionResult Logout()
        {
            Session["LoginValid"] = null;
            return RedirectToAction("index", "home");
        }
    }
}
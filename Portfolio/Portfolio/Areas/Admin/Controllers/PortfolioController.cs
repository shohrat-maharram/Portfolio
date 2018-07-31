using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Areas.Admin.Controllers
{
    public class PortfolioController : Controller
    {
        // GET: Admin/Portfolio
        public ActionResult Index()
        {
            return View();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;

namespace Portfolio.Areas.Admin.Controllers
{
    public class MessagesController : Controller
    {
        PortfolioEntities db = new PortfolioEntities();
        // GET: Admin/Messages
        public ActionResult Index()
        {
            ViewBag.Messages = db.Messages.ToList();
            return View();
        }

        //Deleting Message
        public ActionResult DeleteMessage(int id)
        {
            Messages message = db.Messages.Find(id);
            db.Messages.Remove(message);
            db.SaveChanges();
            return RedirectToAction("index");
        }
    }
}
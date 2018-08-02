using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;
using System.Net.Mail;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        PortfolioEntities db = new PortfolioEntities();
        public ActionResult Index()
        {
            var LangSite = Request.RequestContext.RouteData.Values["lang"];
            ViewBag.AboutMe = db.AboutMe.FirstOrDefault(a => a.Lang == LangSite.ToString());

            if (ViewBag.AboutMe == null)
            {
                LangSite = "en";
                ViewBag.AboutMe = db.AboutMe.FirstOrDefault(a => a.Lang == LangSite.ToString());
            }

            ViewBag.Knowledge = db.Knowledge.ToList();
            ViewBag.Skills = db.Skills.ToList();
            ViewBag.Portfolio = db.Portfolio.ToList();
            ViewBag.Social = db.Social.ToList();

            return View();
        }



        //Download CV as pdf format
        public ActionResult DownloadCV()
        {
            var cv = db.AboutMe.FirstOrDefault(c => c.Lang == "en").CV;
            return File("~/Uploads/"+ cv, "application/pdf");
        }


        //Get portgolio Media and fill to slider
        [HttpGet]
        public JsonResult portfolioMedia(int id)
        {
            List<string> media = new List<string>();

            var gallery = db.Gallery.Where(g => g.PortfolioId == id).Select(f => new
            {
                f.Media
            }).ToList();
            foreach (var item in gallery)
            {
                media.Add(item.Media);
            }
            return Json(media, JsonRequestBehavior.AllowGet);
        }        

        //Sending Message
        [HttpPost]
        public ActionResult SendMessage(MessagesModel msg)
        {
            if ((msg.email==null)|| (msg.name == null) || (msg.text == null)|| !msg.email.Contains("@"))
            {
                return Json(new { response = false });
            }                       

            MailAddress from = new MailAddress("shohret550@gmail.com", msg.name);
            MailAddress to = new MailAddress("shohret550@gmail.com", "Shohret");

            MailMessage mailMessage = new MailMessage(from, to);

            mailMessage.IsBodyHtml = true;
            mailMessage.Subject = msg.subject;
            mailMessage.Body = "<strong>Email From:</strong> " + msg.name+ "<br/><strong>Email:</strong> " + msg.email+ "<br/><br/> <strong>Message:</strong> " + msg.text;

            SmtpClient smtpClient = new SmtpClient();
            smtpClient.Send(mailMessage);

            Messages msgDB = new Messages()
            {
                Name = msg.name,
                Email = msg.email,
                Subject = msg.subject,
                Text = msg.text,
                Date = msg.date
            };
            db.Messages.Add(msgDB);
            db.SaveChanges();

            //return Content(msgDB.Date.ToString());
            return Json(new { response = true });
        } 
    }
}
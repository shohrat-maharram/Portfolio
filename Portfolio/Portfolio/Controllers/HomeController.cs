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
        public ActionResult Index()
        {
            return View();
        }

        
        [HttpPost]
        public ActionResult SendMessage(MessagesModel msg)
        {            
            MailAddress from = new MailAddress("shohret550@gmail.com", msg.name);
            MailAddress to = new MailAddress("shohret550@gmail.com", "Shohret");

            MailMessage mailMessage = new MailMessage(from, to);

            mailMessage.IsBodyHtml = true;
            mailMessage.Subject = msg.subject;
            mailMessage.Body = msg.text + " Tarix: "+msg.date + "<br/> Email: " + msg.email;          

            SmtpClient smtpClient = new SmtpClient();
            smtpClient.Send(mailMessage);

            Session["MessageSent"] = true;
            return RedirectToAction("index");
        }
    }
}
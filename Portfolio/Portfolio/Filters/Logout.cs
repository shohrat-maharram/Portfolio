using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Filters
{
    public class Logout: ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            if (HttpContext.Current.Session["LoginValid"] == null)
            {
                filterContext.Result = new RedirectResult("~/admin/");
                return;
            }
            base.OnActionExecuted(filterContext);
        }
    }
}
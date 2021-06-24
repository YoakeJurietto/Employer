using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Employer.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employer
        public ActionResult Employee()
        {
            return View();
        }
    }
}
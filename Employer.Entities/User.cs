using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Employer.Entities
{
    public class User
    {
        public int idUser { get; set; }
        public string name { get; set; }
        public string lastName { get; set; }
        public string address { get; set; }
        public int age { get; set; }
        public string phone { get; set; }
        public string gender{ get; set; }
    }
}
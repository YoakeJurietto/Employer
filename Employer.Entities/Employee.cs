using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Employer.Entities
{
    public class Employee:User
    {
        public int idEmployee { get; set; }
        public decimal salary { get; set; }
        public DateTime dateAdmission { get; set; }
        public int idBranch { get; set; }
    }
}
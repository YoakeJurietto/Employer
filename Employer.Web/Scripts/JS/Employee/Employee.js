var Employee = function () {
    
    
}
var http = new EmployeeHttp();

Employee.prototype = {
    toSelectEmployee: function () {
        http.toGet('Employee');
    }
}

let employee = new Employee;
init = function () {
    employee.toSelectEmployee();
}
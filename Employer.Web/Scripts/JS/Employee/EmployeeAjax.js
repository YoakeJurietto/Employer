var EmployeeHttp = function () { };
var utility = new Utility();

EmployeeHttp.prototype =
{
    /*toGet: function (id) {},*/
    toGet: function (method) {
        $.ajax({
            url: utility.toGetURLWS(method),
            type: 'GET',
            async: false,
            data: {},
            cache: false,
            contentType: "application/json",
            success: function (data) {
                console.log('sus');
                console.log(data);
            },
            error: function (xhr, status, error) {
                console.log('error');
                console.log(xhr);
            }
        });
    },
    toPost: function () {},
    toPut: function () {},
    toDelete: function (){},
}

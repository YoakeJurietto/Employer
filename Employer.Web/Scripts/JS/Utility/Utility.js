var siteUrlBase = "http://adminemployer:9090";

var Utility = function () {    
    this.localUtilities = {};
    this.localUtilities.wsUrlBase = siteUrlBase + "/Employer.WS/api/";
}
Utility.prototype = {
    toSetURL: function () { },
    toGetURLWS: function (method) {
        return this.localUtilities.wsUrlBase + method;
    },
    toSetError: function () { }
}
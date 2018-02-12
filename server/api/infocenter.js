var config = require('../config');
var browser =  require('powwow-server-common').browser;
// var Client = require('node-rest-client'.Client);

function getBatch(page, batchNumber, res) {

    $scope.console.log("Entro");

	// var url = "ldap://" + config.adURL;

	// // direct way 
    // var client = new Client();
    
    // var args = {
    //     parameters: { BatchNo: batchNumber }, // this is serialized as URL parameters 
    // };    
    
    // client.get("http://localhost/Xtend/AFS/api/InfoCenter/GetBatch", args,
    //     function (data, response) {
    //         // parsed response body as js object 
    //         $scope.console.log(data);
    //         // raw response 
    //         $scope.console.log(response);
    //     });
}

exports.infocenter = getBatch;
var config = require('../config');
var browser =  require('powwow-server-common').browser;
var Client = require('node-rest-client').Client;

function getBatch(page, batchNumber, res) {

	// var url = "ldap://" + config.adURL;

	// direct way 
    var client = new Client();
    
    var args = {
        parameters: { BatchNo: batchNumber }, // this is serialized as URL parameters 
    };    
    
    client.get("http://localhost/Xtend/AFS/api/InfoCenter/GetBatch", args,
        function (data, response) {
            // parsed response body as js object 
            //console.log(data);
            // raw response 
            //console.log(response);
            page.data(function (data) {              
                data.batch.batchNumber = batchNumber;
            }).screen('infocenter'); 

        }).on('error', function (err) {
            console.log('something went wrong on the request', err.request.options);
        });
}

exports.getBatch = getBatch;
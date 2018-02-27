var config = require('../config');
var browser =  require('powwow-server-common').browser;
var request = require('request')


function getBatch(page, batchNumber, res) {

    var userName = 'gdlggara@Americas';
    var password = 'Jueves.78';

    var options = {
      parameters: { BatchNo: batchNumber },
      url: 'http://'+ config.xtendServer +'/Xtend/AFS/api/InfoCenter/GetBatch?BatchNo=' + batchNumber,
      auth: {
          user: userName,
          password: password
        } 
      };

    request(options, function (err, res, body) {
        if (err) {
          console.dir(err)
          return
        }
        var batch = JSON.parse("[" + body + "]");

        console.log(batch);

        page.data(function (data) {
          data.batch = batch;
        }).screen('Infocenter.batchDetails');

      })
    
}

exports.getBatch = getBatch;
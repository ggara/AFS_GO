var config = require('../config');
var browser =  require('powwow-server-common').browser;
var request = require('request')
var userName = 'gdlggara@Americas';
var password = 'Jueves.78';

function getBatch(page, batchNumber, res) {

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
          if(!body){
            data.errorMessage = "Batch not found !";
          }
        }).screen('Infocenter.batchDetails');

      })
    
}

function getCarton(page, cartonNumber, res) {

  var options = {
    url: 'http://'+ config.xtendServer +'/Xtend/AFS/api/InfoCenter/GetCarton?CartonNo=' + cartonNumber,
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
      
      var carton = JSON.parse("[" + body + "]");

      page.data(function (data) {
        data.carton = carton;
        if(!body){
          data.errorMessage = "Carton not found !";
        }
      }).screen('Infocenter.cartonDetails');

    })
  
}

exports.getBatch = getBatch;
exports.getCarton = getCarton;
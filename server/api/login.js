var config = require('../config');
var browser =  require('powwow-server-common').browser;
var ldap = require('ldapjs');

function login(page, user, res) {
	var url = "ldap://" + config.adURL;
    // var userName = user.userName + "@" + req.body.domain;
    var userName = user.userName;
	var passwd = user.password;

	if (passwd === "") {
		res.send("The empty password trick does not work here.");
		return ;
	}

	// Bind as the user
	var adClient = ldap.createClient({ url: url });
	adClient.bind(userName, passwd, function(err) {

		if (err != null) {
			if (err.name === "InvalidCredentialsError")                
                page.data(function (data) {
                    data.errorMessage = "Credential error";
                    data.username = userName;                    
                }).screen('login');
			else
                page.data(function (data) {
                    data.errorMessage = "Unknown error: " + JSON.stringify(err);
                    data.username = userName;  
                }).screen('login');
		} else {
            page.data(function (data) {              
                data.username = userName;                    
            }).screen('home');
		}  // End of the if err == null part
	});  // End of the function called by adClient.bind
}

exports.login = login;

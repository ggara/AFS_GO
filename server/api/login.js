var config = require('../config');
var browser =  require('powwow-server-common').browser;
var ldap = require('ldapjs');

function login(page, user, res) {
	var url = "ldap://" + config.adURL;

	if (user.password === "") {
        page.data(function (data) {
            data.errorMessage = "Type password for the account";
            data.username = user.userName;                    
        }).screen('login');
		return;
	}

    // Bind as the user
	var adClient = ldap.createClient({ url: url });
	adClient.bind(user.userName + "@" + config.domain, user.password, function(err) {
		if (err != null) {
			if (err.name === "InvalidCredentialsError")                
                page.data(function (data) {
                    data.errorMessage = "Credential error";
                    data.username = user.userName;                    
                }).screen('login');
			else
                page.data(function (data) {
                    data.errorMessage = "Unknown error: " + JSON.stringify(err);
                    data.username = user.userName;  
                }).screen('login');
		} else {
            page.data(function (data) {              
                data.username = user.userName;                    
            }).screen('home');    
		}
	});
}

exports.login = login;
angular.module('app').controller('app_home', app_home);
function app_home($scope, app, $localStorage) {
    'use strict';
    app.init($scope);
    
    var username = $localStorage.username;
}
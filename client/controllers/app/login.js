angular.module('app').controller('app_login', app_login);
function app_login($scope, app, $q) {
    'use strict';
    app.init($scope);
    if (!$scope.data) {
        $scope.data = {};
    }
    var checkSupport = function () {
        var deferred = $q.defer();
        if (typeof cordova !== 'undefined' && window.plugins && window.plugins.touchid) {
            window.plugins.touchid.isAvailable(function () {
                window.plugins.touchid.has('credentials', function () {
                    deferred.resolve(true);
                }, function () {
                    deferred.resolve(false);
                });
            });
        }
        return deferred.promise;
    };
    
    $scope.reset = function () {
        localStorage.clear();
    };

    $scope.login = function () {
        if(!$scope.data.username){
            $scope.data.errorMessage = "Invalid Username";
        }
        else if (!$scope.data.password){
            $scope.data.errorMessage = "Invalid Password";
        }
        else{
            var user = {
                userName: $scope.data.username,
                password: $scope.data.password
            }
            $scope.app.showLoading('Logging in');
            app.call("login.login", user);
        }
    };

    $scope.doAppLogin = function (credentials) {
        window.plugins.touchid.save('credentials', JSON.stringify(credentials));
        $scope.doLogin(credentials, true);
    };
}
angular.module('app').controller('app_infocenter_infocenter', app_infocenter_infocenter);
function app_infocenter_infocenter($scope, app) {
    'use strict';
    app.init($scope);

    $scope.data.tabs = 
        [
            {
              "name": "Batch",
              "icon": "ion-ios-information",
              "selected": true
            },
            {
              "name": "Carton",
              "icon": "ion-ios-bell",
              "selected": false
            }
          ];
    
}
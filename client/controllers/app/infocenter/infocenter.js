angular.module('app').controller('app_infocenter_infocenter', app_infocenter_infocenter);
function app_infocenter_infocenter($scope, app) {
    'use strict';
    app.init($scope);

    $scope.data.tabs = {
        "tabs" :[
            {
              "name": "Tab One",
              "icon": "ion-ios-information",
              "selected": true
            },
            {
              "name": "Tab Two",
              "icon": "ion-ios-bell",
              "selected": false
            },
            {
              "name": "Tab Three",
              "icon": "ion-help-buoy",
              "selected": false
            }
          ]
    };
    
}
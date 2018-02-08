angular.module('app').controller('app_infocenter_infocenter', app_infocenter_infocenter);
function app_infocenter_infocenter($scope, app) {
    'use strict';
    app.init($scope);

    $scope.data.tabs = 
        [
            {
              "name": "Batch",
              "icon": "ion-ios-barcode-outline",
              "selected": true,
              "action": "Batch"
            },
            {
              "name": "Carton",
              "icon": "ion-ios-box-outline",
              "selected": false,
              "action": "Carton"
            }
        ];
}
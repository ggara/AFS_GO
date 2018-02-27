angular.module('app').controller('app_infocenter_infocenter', app_infocenter_infocenter);
function app_infocenter_infocenter($scope, app) {
    'use strict';
    app.init($scope);

    $scope.data.tabs = 
        [
            {
              "name": "Batch",
              "icon": "ion-ios-barcode-outline",
              "selected": true
            },
            {
              "name": "Carton",
              "icon": "ion-ios-box-outline",
              "selected": false
            }
        ];
        
    $scope.changeSelection = function (tab) {
        $scope.data.tabs.forEach(function(currentTab){
            currentTab.selected = false;
        });
        
        tab.selected = true;
    };
    
    $scope.scan = function () {
        var batchNumber = $scope.data.BatchNumber;
        $scope.data.errorMessage = "";
        
        if (batchNumber === undefined || batchNumber.length === 0) {
            $scope.data.errorMessage = 'Please enter a batch number';
            return;
        }
        
        $scope.app.showLoading('Searching for batch number: ' + batchNumber);
        var api = app.call("infocenter.getBatch", batchNumber);
        /*
       cordova.plugins.barcodeScanner.scan(function (result) {
            setTimeout(function () {
                //$scope.data.format = result.format;
                //$scope.data.trackingNumber = result.text;
                $scope.$digest();
            }, 0);
        }, function (error) {
        }, {
            'preferFrontCamera': false,
            'showFlipCameraButton': true,
            'showTorchButton': true,
            'orientation': 'landscape'
        });
        */
    };
}
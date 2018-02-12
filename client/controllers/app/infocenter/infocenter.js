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
       
        if (cordova&&cordova.plugins&&cordova.plugins.barcodeScanner)
        {
            cordova.plugins.barcodeScanner.scan(
                // success callback function
                function (result) {
                    // wrapping in a timeout so the dialog doesn't free the app
                    setTimeout(function () {
                        //$scope.data.format = result.format;
                        $scope.data.batchnumber = result.text;
                        $scope.$digest();
                        //app.action('home', 'submit', this);
                        
                    }, 0);
                },
    
                // error callback function
                function (error) {
    
                },
    
                // options object
                {
                    "preferFrontCamera": false,
                    "showFlipCameraButton": true,
                    "showTorchButton": true,
                    "orientation": "landscape"
                }
            );
        }
        else
        {
          alert("Cordova Not available");  
        }
    };
}
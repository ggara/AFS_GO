angular.module('app').controller('app_menu', app_menu);
function app_menu($scope, app, $ionicPopup) {
    'use strict';
    var isSetup = false;
    
    app.init($scope);
    
     if (!isSetup) {
            app.call('popup.getConfirmPopupText');
            isSetup = true;
        }
    
    $scope.alert = function () {
        $ionicPopup.show({
            title: 'About',
            subTitle: 'This is an alert box, click OK button',
            scope: $scope,
            buttons: [{
                    text: '<b>Ok</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (window.mocks) {
                            $scope.app.data.alertConfirmationMessage = 'This is a warning message!';
                        } else {
                            app.call('popup.alert');
                        }
                    }
                }]
        });
    };
    
}

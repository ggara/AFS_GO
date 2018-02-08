'use strict';
window.mocks = window.mocks || {};
window.mocks.infocenter = window.mocks.infocenter || {};
window.mocks.infocenter.tabs_action = function ($scope, params, app) {
    function Carton() {
        app.go('app.infocenter.infocenter');
    }
    function Batch() {
        app.go('app.infocenter.infocenter');
    }
};
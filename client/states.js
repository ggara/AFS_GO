angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.home', {
        views: {
            app: {
                controller: 'app_home',
                templateProvider: function (app) {
                    return app.templateProvider('app.home');
                }
            }
        }
    }).state('app.infocenter/infocenter', {
        views: {
            app: {
                controller: 'app_infocenter_infocenter',
                templateProvider: function (app) {
                    return app.templateProvider('app.infocenter.infocenter');
                }
            }
        }
    }).state('app.infocenter/batchdetails', {
        views: {
            app: {
                controller: 'app_infocenter_batchdetails',
                templateProvider: function (app) {
                    return app.templateProvider('app.infocenter.batchdetails');
                }
            }
        }
    }).state('app.infocenter/cartondetails', {
        views: {
            app: {
                controller: 'app_infocenter_cartondetails',
                templateProvider: function (app) {
                    return app.templateProvider('app.infocenter.cartondetails');
                }
            }
        }
    });
});
'use strict';

/**
 * @ngdoc overview
 * @name advertiserApp
 * @description
 * # advertiserApp
 *
 * Main module of the application.
 */
angular
  .module('advertiserApp', [
    'ngRoute',
    'toaster',
    'ngAnimate',
    'ui.grid',
    'directives.customvalidation.customValidationTypes',
    'ui.ace',
    'ui.bootstrap',
    'angularSpinner'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/advertisers.html',
        controller: 'AdvertisersCtrl',
        controllerAs: 'advertisersCtrl'
      })
      .when('/advertiser/:id', {
        templateUrl: 'views/advertiserNew.html',
        controller: 'AdvertiserCtrl',
        controllerAs: 'advertiserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

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
    'ui.ace',
    'ui.bootstrap',
    'angularSpinner',
    'ngSanitize',
    'btford.markdown'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/advertisers.html',
        controller: 'AdvertisersCtrl',
        controllerAs: 'advertisersCtrl'
      })
      .when('/advertiser/:id', {
        templateUrl: 'views/advertiserNewEdit.html',
        controller: 'AdvertiserCtrl',
        controllerAs: 'advertiserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

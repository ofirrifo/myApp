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
    'restangular',
    'ngRoute',
    'toaster',
    'ngAnimate',
    'ui.grid',
    'ngMaterial',
    'directives.customvalidation.customValidationTypes'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/advertisers.html',
        controller: 'AdvertisersCtrl',
        controllerAs: 'advertisersCtrl'
      })
      .when('/advertiser', {
        templateUrl: 'views/advertiserNew.html',
        controller: 'AdvertiserCtrl',
        controllerAs: 'advertiserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

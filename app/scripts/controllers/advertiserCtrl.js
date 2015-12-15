'use strict';

/**
 * @ngdoc function
 * @name advertiserApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the advertiserApp
 */
angular.module('advertiserApp')
  .controller('AdvertiserCtrl', ['$scope', 'advertiserEntityFactoryService','advertiserRestService', function ($scope, advertiserEntityFactoryService,advertiserRestService) {
    var vm = this;
    vm.advertiser = advertiserEntityFactoryService.createAdvertiser();

    vm.onSaveClick = function(){
      advertiserRestService.saveAdvertiser(vm.advertiser);
    };

    $scope.locallyDefinedValidations = [
      {
        errorMessage: 'URL is not valid',
        validator: function (errorMessageElement, val) {
          return val.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

        }
      }
    ]
  }]);

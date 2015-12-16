(function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name advertiserApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the advertiserApp
   */
  angular.module('advertiserApp')
    .controller('AdvertiserCtrl', AdvertiserCtrl);

  AdvertiserCtrl.$inject = ['$scope', 'advertiserEntityFactoryService', 'advertiserRestService', 'advertiserCommonService','$routeParams'];

  function AdvertiserCtrl($scope, advertiserEntityFactoryService, advertiserRestService, advertiserCommonService,$routeParams) {
    var vm = this,
    advertiserId = $routeParams.id;

    vm.isEditMode = advertiserCommonService.isEditMode(advertiserId);

    if(vm.isEditMode){
      advertiserRestService.getAdvertiserById(advertiserId).then(function (advertiser) {
        vm.advertiser = advertiser;
        vm.advertiser.uiCreatedAt = advertiserCommonService.formatDateAndTime(vm.advertiser.createdAt);
        vm.advertiser.uiUpdatedAt = advertiserCommonService.formatDateAndTime(vm.advertiser.updatedAt);
      });
    }
    else{
      vm.advertiser = advertiserEntityFactoryService.createAdvertiser();
    }


    vm.decriptionEditorOptions = {
      useWrapMode : true,
      showGutter: false,
      theme:'twilight',
      mode: 'markdown'
    };


    vm.onSaveClick = function () {
      advertiserRestService.saveAdvertiser(vm.advertiser, vm.isEditMode);
    };

    $scope.locallyDefinedValidations = [
      {
        errorMessage: 'URL is not valid',
        validator: function (errorMessageElement, val) {
          return val.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

        }
      }
    ];
  }
})(angular);

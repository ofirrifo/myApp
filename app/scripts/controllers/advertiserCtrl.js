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
    var vm = this;
    var id = $routeParams.id;

    vm.advertiser = advertiserEntityFactoryService.createAdvertiser();
    vm.decriptionEditorOptions = {
      useWrapMode : true,
      showGutter: false,
      theme:'twilight',
      mode: 'markdown'
    };

    advertiserRestService.getAdvertisers().then(function (advertisers) {
      vm.advertiser = advertisers[0];
      vm.advertiser.uiCreatedAt = advertiserCommonService.formatDateAndTime(vm.advertiser.createddAt);
      vm.advertiser.uiUpdatedAt = advertiserCommonService.formatDateAndTime(vm.advertiser.updatedAt);
    });

    vm.isEditMode = advertiserCommonService.isEditMode(vm.advertiser);


    vm.onSaveClick = function () {
      advertiserRestService.saveAdvertiser(vm.advertiser);
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

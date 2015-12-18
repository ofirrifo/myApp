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

  AdvertiserCtrl.$inject = ['$scope', 'advertiserEntityFactoryService', 'advertiserRestService', 'advertiserCommonService', '$routeParams','$timeout'];

  function AdvertiserCtrl($scope, advertiserEntityFactoryService, advertiserRestService, advertiserCommonService, $routeParams, $timeout) {
    var vm = this,
      showSpinnerTimeout,
      advertiserId = $routeParams.id;

    vm.showSpinner = true;
    vm.isEditMode = advertiserCommonService.isEditMode(advertiserId);

    if (vm.isEditMode) {
      vm.isValidView = true;
      advertiserRestService.getAdvertiserById(advertiserId).then(function (advertiser) {
        vm.advertiser = advertiser;
        vm.advertiser.uiCreatedAt = advertiserCommonService.formatDateAndTime(vm.advertiser.createdAt);
        vm.advertiser.uiUpdatedAt = advertiserCommonService.formatDateAndTime(vm.advertiser.updatedAt);

        $scope.$root.$broadcast('onOpenAdvertiser', {name: vm.advertiser.name, id: advertiserId});

        vm.title = "Edit Advertiser";

        // ***NOTE**
        // this time out it just for the demo to show I added spinner
        // without the time out the grid load very fast and we will not see the spinner
        showSpinnerTimeout = $timeout(function () {
          vm.showSpinner = false;
        }, 200);
      });
    }
    else {
      vm.isValidView = false;
      vm.advertiser = advertiserEntityFactoryService.createAdvertiser();
      vm.title = "New Advertiser";
      vm.showSpinner = false;
    }


    vm.decriptionEditorOptions = {
      useWrapMode: true,
      showGutter: false,
      theme: 'twilight',
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

    $scope.$on("$destroy", function () {
      if (showSpinnerTimeout) {
        $timeout.cancel(showSpinnerTimeout);
      }
    });
  }
})(angular);

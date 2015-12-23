/**
 * Created by ofir on 12/15/2015.
 */
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

  AdvertiserCtrl.$inject = ['$scope', 'advertiserEntityFactoryService', 'advertiserRestService', 'advertiserCommonService', '$routeParams', '$timeout', 'commonConst'];

  function AdvertiserCtrl($scope, advertiserEntityFactoryService, advertiserRestService, advertiserCommonService, $routeParams, $timeout, commonConst) {
    var vm = this,
      showSpinnerTimeout,
      eventsNames = commonConst.events.names,
      advertiserId = $routeParams.id;

    vm.showSpinner = true;
    vm.isEditMode = advertiserCommonService.isEditMode(advertiserId);

    if (vm.isEditMode) {
      vm.isValidView = true;
      advertiserRestService.getAdvertiserById(advertiserId).then(function (advertiser) {
        vm.advertiser = advertiser;
        vm.advertiser.uiCreatedAt = advertiserCommonService.formatDateAndTime(vm.advertiser.createdAt);
        vm.advertiser.uiUpdatedAt = advertiserCommonService.formatDateAndTime(vm.advertiser.updatedAt);

        var dtoAdvertiser = advertiserEntityFactoryService.createDtoAdvertiser(vm.advertiser);
        $scope.$root.$broadcast(eventsNames.onOpenAdvertiser, dtoAdvertiser);

        vm.title = "Edit Advertiser";

        // ***NOTE**
        // this $timeout it just for the demo to show I added spinner
        // without the time out the grid load very fast and we will not see the spinner
        showSpinnerTimeout = $timeout(function () {
          vm.showSpinner = false;
        }, 200);
      }, function () {
        vm.showSpinner = false;
      });
    }
    else {
      vm.isValidView = false;
      vm.advertiser = advertiserEntityFactoryService.createAdvertiser();
      vm.title = "New Advertiser";
      vm.showSpinner = false;
    }

    vm.descriptionEditorOptions = {
      useWrapMode: true,
      showGutter: false,
      theme: 'twilight',
      mode: 'markdown'
    };

    vm.onSaveClick = function () {
      advertiserRestService.saveAdvertiser(vm.advertiser, vm.isEditMode).then(function (advertiser) {
        vm.showSpinner = false;
        advertiserCommonService.navigateTo("advertiser/" + advertiser.id);
      });
    };

    $scope.$on("$destroy", function () {
      if (showSpinnerTimeout) {
        $timeout.cancel(showSpinnerTimeout);
      }
    });
  }

})(angular);

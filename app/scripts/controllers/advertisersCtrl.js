(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name advertiserApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the advertiserApp
   */
  angular.module('advertiserApp')
    .controller('AdvertisersCtrl', AdvertisersCtrl);

  AdvertisersCtrl.$inject = ['advertiserRestService', 'advertisersGridConst', 'advertiserCommonService', '$location', '$timeout', '$scope'];

  function AdvertisersCtrl(advertiserRestService, advertisersGridConst, advertiserCommonService, $location, $timeout, $scope) {

    var vm = this,
      showSpinnerTimeout;
    vm.gridOptions = advertisersGridConst.gridOptions;
    vm.showSpinner = true;

    advertiserRestService.getAdvertisers().then(function (advertisers) {
      vm.gridOptions.data = advertisers;

      vm.gridOptions.data.forEach(function (advertiser) {
        advertiser.uiCreatedAt = advertiserCommonService.formatDateAndTime(advertiser.createdAt);
        advertiser.uiUpdatedAt = advertiserCommonService.formatDateAndTime(advertiser.updatedAt);
      });

      // ***NOTE**
      // this time out it just for the demo to show I added spinner
      // without the time out the grid load very fast and we will not see the spinner
      showSpinnerTimeout = $timeout(function () {
        vm.showSpinner = false;
      }, 300);

    });

    vm.onEditClick = function (row) {
      $location.path("advertiser/" + row.entity.id);
    };

    $scope.$on("$destroy", function () {
      if (showSpinnerTimeout) {
        $timeout.cancel(showSpinnerTimeout);
      }
    });
  }

})();

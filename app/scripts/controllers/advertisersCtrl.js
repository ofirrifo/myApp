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

  AdvertisersCtrl.$inject = ['advertiserRestService', 'advertisersGridConst', 'advertiserCommonService', '$location', '$timeout', '$scope', 'commonConst'];

  function AdvertisersCtrl(advertiserRestService, advertisersGridConst, advertiserCommonService, $location, $timeout, $scope, commonConst) {

    var vm = this,
      eventsNames = commonConst.events.names,
      showSpinnerTimeout;
    vm.gridOptions = advertisersGridConst.gridOptions;
    vm.showSpinner = true;

    $scope.$root.$broadcast(eventsNames.initLastAdvertiser);

    advertiserRestService.getAdvertisers().then(function (advertisers) {
      vm.gridOptions.data = advertisers;

      vm.gridOptions.data.forEach(function (advertiser) {
        advertiser.uiCreatedAt = advertiserCommonService.formatDateAndTime(advertiser.createdAt);
        advertiser.uiUpdatedAt = advertiserCommonService.formatDateAndTime(advertiser.updatedAt);
      });

      // ***NOTE**
      // this $timeout it just for the demo to show I added spinner
      // without the time out the grid load very fast and we will not see the spinner
      showSpinnerTimeout = $timeout(function () {
        vm.showSpinner = false;
      }, 300);

    });

    vm.onEditClick = function (row) {
      advertiserCommonService.navigateTo("advertiser/" + row.entity.id);
    };

    $scope.$on("$destroy", function () {
      if (showSpinnerTimeout) {
        $timeout.cancel(showSpinnerTimeout);
      }
    });
  }

})();

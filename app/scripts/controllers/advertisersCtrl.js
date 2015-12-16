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

  AdvertisersCtrl.$inject = ['advertiserRestService', 'advertisersGridConst', 'advertiserCommonService','$location'];

  function AdvertisersCtrl(advertiserRestService, advertisersGridConst, advertiserCommonService,$location) {

    var vm = this;
    vm.gridOptions = advertisersGridConst.gridOptions;

    advertiserRestService.getAdvertisers().then(function (advertisers) {
      vm.gridOptions.data = advertisers;

      vm.gridOptions.data.forEach(function (advertiser) {
        advertiser.uiCreatedAt = advertiserCommonService.formatDateAndTime(advertiser.createdAt);
        advertiser.uiUpdatedAt = advertiserCommonService.formatDateAndTime(advertiser.updatedAt);
      });
    });

    vm.onEditClick = function (row) {
      $location.path("advertiser/" + row.entity.id);
    };

  }

})();

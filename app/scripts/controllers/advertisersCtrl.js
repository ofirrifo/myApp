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

  AdvertisersCtrl.$inject = ['advertiserRestService','advertisersGridConst'];

  function AdvertisersCtrl(advertiserRestService, advertisersGridConst) {

    var vm = this;
    vm.gridOptions = advertisersGridConst.gridOptions;

    advertiserRestService.getAdvertisers().then(function (advertisers) {
      vm.gridOptions.data = advertisers;
    });

  }

})();

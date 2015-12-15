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

  AdvertisersCtrl.$inject = ['advertiserRestService'];

  function AdvertisersCtrl(advertiserRestService) {

    var vm = this;
    vm.gridOptions = {};
    vm.gridOptions.columnDefs = [
      {name: 'id'},
      {name: 'name'},
      {name: 'description'},
      {name: 'link'},
      {name: 'createdAt'},
      {name: 'updatedAt'}
    ];

    advertiserRestService.getAdvertisers().then(function (advertisers) {
      vm.gridOptions.data = advertisers;
    });

  }

})();

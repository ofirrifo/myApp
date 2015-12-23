/**
 * Created by ofir on 12/15/2015.
 */
(function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name app.advertiserCommonService
   * @description
   * This service contain the common advertiser functionality
   */
  angular.module('advertiserApp')
    .service('advertiserCommonService', advertiserCommonService);

  advertiserCommonService.$inject = ['$location'];

  function advertiserCommonService($location) {
    var self = this;

    self.isEditMode = function (id) {
      return Math.round(id) == id;
    };

    self.formatDateAndTime = function (date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    };

    self.navigateTo = function (path) {
      $location.path(path);
    };
  }

})(angular);

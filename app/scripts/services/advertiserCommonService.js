/**
 * Created by ofir on 12/15/2015.
 */
(function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name app.advertiserCommonService
   * @description
   */
  angular.module('advertiserApp')
    .service('advertiserCommonService', advertiserCommonService);

  advertiserCommonService.$inject = [];

  function advertiserCommonService() {
    var self = this;

    self.isEditMode = function (id) {
      return id !== "new";
    };

    self.formatDateAndTime = function (date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    };
  }

})(angular);

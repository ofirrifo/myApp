/**
 * Created by ofir on 12/13/2015.
 */
(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.alertService
   * @description
   * 1. This service help us with different type of alerts.
   * 2. This service use toaster service.
   */
  angular.module('advertiserApp')
    .service('alertService', alertService);

  alertService.$inject = ['toaster', 'alertConst'];

  function alertService(toaster, alertConst) {
    var self = this;
    var defaultAlertOption = angular.copy(alertConst.defaultAlertOption);

    self.addSuccess = function (alertOption) {
      defaultAlertOption.success = angular.extend(defaultAlertOption.success, alertOption);
      toaster.pop(defaultAlertOption.success);
    };

    self.addError = function (alertOption) {
      defaultAlertOption.success = angular.extend(defaultAlertOption.error, alertOption);
      toaster.pop(defaultAlertOption.error);
    };
  }

})();

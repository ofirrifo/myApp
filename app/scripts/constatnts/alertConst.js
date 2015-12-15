/**
 * Created by ofir on 12/13/2015.
 */
(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.alertService
   * @description
   */
  angular.module('advertiserApp')
    .constant('alertConst', {
      defaultAlertOption:{
        success:{
          type: 'success',
          title: 'Success',
          showCloseButton: true
        },
        error:{
          type: 'error',
          title: 'Error',
          showCloseButton: true
        }
      }
    });




})();

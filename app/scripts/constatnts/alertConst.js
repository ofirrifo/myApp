/**
 * Created by ofir on 12/13/2015.
 */
(function (angular) {
  'use strict';

  angular.module('advertiserApp')
    .constant('alertConst', {
      defaultAlertOption: {
        success: {
          type: 'success',
          title: 'Success',
          showCloseButton: true
        },
        error: {
          type: 'error',
          title: 'Error',
          showCloseButton: true
        }
      }
    });

})(angular);

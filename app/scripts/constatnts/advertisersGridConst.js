/**
 * Created by ofir on 12/13/2015.
 */
(function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name app.alertService
   * @description
   */
  angular.module('advertiserApp')
    .constant('advertisersGridConst', {
      gridOptions:{
        columnSetup:[
          {name: 'id'},
          {name: 'name'},
          {name: 'description'},
          {name: 'link'},
          {name: 'createdAt'},
          {name: 'updatedAt'}
        ]
      }

    });
})(angular);

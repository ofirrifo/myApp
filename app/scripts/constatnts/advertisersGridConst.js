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
        columnDefs:[
          {name: 'id',width:60},
          {name: 'editAdvertiser',
            width:120,
            cellTemplate: '<div class="ui-grid-cell-contents">' +
            '<button class="btn btn-default btn-xs" type="button" ng-click="grid.appScope.advertisersCtrl.onEditClick(row)">Edit</button>' +
            '</div>' },
          {name: 'name'},
          {name: 'description'},
          {name: 'link'},
          {name: 'uiCreatedAt'},
          {name: 'uiUpdatedAt'}
        ]
      }
    });
})(angular);

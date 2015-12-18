/**
 * Created by ofir on 12/13/2015.
 */
(function (angular) {
  'use strict';

  angular.module('advertiserApp')
    .constant('advertisersGridConst', {
      gridOptions: {
        enableSorting: true,
        enableFiltering: true,
        columnDefs: [
          {
            name: 'id',
            width: 100,
            sortingAlgorithm: function (a,b) {
              if (a == b) return 0;
              if (a < b) return -1;
              return 1;
            }
          },
          {
            name: 'editAdvertiser',
            enableFiltering: false,
            enableSorting: false,
            width: 140,
            cellTemplate: '<div class="ui-grid-cell-contents">' +
            '<button class="btn btn-default btn-xs" type="button" ng-click="grid.appScope.advertisersCtrl.onEditClick(row)">Edit</button>' +
            '</div>'
          },
          {name: 'name'},
          {name: 'description', width: 500, enableSorting: false},
          {
            name: 'link',
            width: 500,
            enableSorting: false,
            cellTemplate: '<div class="ui-grid-cell-contents"><a target="_blank" href="{{ COL_FIELD }}">{{COL_FIELD }}</a></div>'
          },
          {name: 'uiCreatedAt', enableFiltering: false},
          {name: 'uiUpdatedAt', enableFiltering: false}
        ]
      }
    });

})(angular);

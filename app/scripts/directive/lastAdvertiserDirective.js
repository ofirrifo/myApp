/**
 * Created by ofir on 12/16/2015.
 */
(function (angular) {
  'use strict';

  angular.
    module('advertiserApp')
    .directive('lastAdvertiser', lastAdvertiser);

  function lastAdvertiser() {
    var directive = {
      restrict: 'E',
      templateUrl: 'views/lastAdvertiser.html',
      scope: {},
      link: linkFunc,
      controller: LastAdvertiserController,
      controllerAs: 'lastAdvertiserController',
      bindToController: true // because the scope is isolated
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
  }

  LastAdvertiserController.$inject = ['$scope', 'localStorageService', 'commonConst'];

  function LastAdvertiserController($scope, localStorageService, commonConst) {
    var vm = this,
      eventsNames = commonConst.events.names;
    vm.lastAdvertiser = [];

    $scope.$on(eventsNames.onOpenAdvertiser, addAdvertiserTo3Last);
    $scope.$on(eventsNames.initLastAdvertiser, initLastAdvertiser);

    function addAdvertiserTo3Last(e, dtoAdvertiser) {
      if (!_.find(vm.lastAdvertiser, {id: dtoAdvertiser.id})) {
        vm.lastAdvertiser.unshift(dtoAdvertiser);
        if (vm.lastAdvertiser.length > 3) {
          vm.lastAdvertiser.pop();
        }

        localStorageService.setObject("lastAdvertiser", vm.lastAdvertiser);
      }
    }

    function initLastAdvertiser() {
      if (vm.lastAdvertiser.length === 0) {
        var lastAdvertiser = localStorageService.getObject("lastAdvertiser");
        if (lastAdvertiser) {
          vm.lastAdvertiser = lastAdvertiser;
        }
      }
    }
  }

})(angular);



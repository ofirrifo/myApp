/**
 * Created by ofir on 12/16/2015.
 */
(function(angular){

  angular.
    module('advertiserApp')
    .directive('lastAdvertiserDirective', lastAdvertiser);

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

  LastAdvertiserController.$inject = ['$scope'];

  function LastAdvertiserController($scope) {
    var vm = this;
    vm.lastAdvertiser = [];

    $scope.on('onOpenAdvertiser', addAdvertiserTo3Last);

    function addAdvertiserTo3Last(dtoAdvertiser){
      lastAdvertiser.unshift(dtoAdvertiser);
      if(arr.length > 3){
        lastAdvertiser.pop();
      }
    }
  }


})(angular);



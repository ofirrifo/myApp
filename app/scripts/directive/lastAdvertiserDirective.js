/**
 * Created by ofir on 12/16/2015.
 */
(function(angular){

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

  LastAdvertiserController.$inject = ['$scope'];

  function LastAdvertiserController($scope) {
    var vm = this;
    vm.lastAdvertiser = [];

    $scope.$on('onOpenAdvertiser', addAdvertiserTo3Last);

    function addAdvertiserTo3Last(e, dtoAdvertiser){
      if(!_.find(vm.lastAdvertiser,{id:dtoAdvertiser.id})){
        vm.lastAdvertiser.unshift(dtoAdvertiser);
        if(vm.lastAdvertiser.length > 3){
          vm.lastAdvertiser.pop();
        }
      }
    }
  }

})(angular);



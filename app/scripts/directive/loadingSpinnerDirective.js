/**
 * Created by ofir on 12/18/2015.
 */
(function (angular) {
  'use strict';

  angular.
    module('advertiserApp')
    .directive('loadingSpinner', loadingSpinner);

  function loadingSpinner() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/loadingSpinner.html',
      scope: {},
      link: linkFunc,
      controller: LoadingSpinnerController,
      controllerAs: 'loadingSpinnerController',
      bindToController: {
        showSpinner: '='
      }
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
  }

  LoadingSpinnerController.$inject = [];

  function LoadingSpinnerController() {

  }

})(angular);



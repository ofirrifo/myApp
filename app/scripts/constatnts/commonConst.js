/**
 * Created by ofir on 12/18/2015.
 */
(function (angular) {
  'use strict';

  angular.module('advertiserApp')
    .constant('commonConst', {
      events: {
        names: {
          onOpenAdvertiser: "onOpenAdvertiser",
          initLastAdvertiser: "initLastAdvertiser"
        }
      }
    });

})(angular);

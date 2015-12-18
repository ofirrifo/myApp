/**
 * Created by ofir on 12/18/2015.
 */
(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.localStorageService
   * @description
   */
  angular.module('advertiserApp')
    .service('localStorageService', localStorageService);

  localStorageService.$inject = [];

  function localStorageService() {
    var self = this;

    self.getObject = function (key) {
      var item = localStorage.getItem(key);
      return item ? JSON.parse(localStorage.getItem(key)): null ;
    };

    self.setObject = function (key, object) {
      localStorage.setItem(key, JSON.stringify(object));
    };
  }
})();

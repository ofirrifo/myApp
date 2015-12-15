/**
 * Created by ofir on 12/14/2015.
 */
(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.advertiserEntityFactoryService
   * @description
   */
  angular
    .module('advertiserApp')
    .service('advertiserEntityFactoryService', advertiserEntityFactoryService);

  advertiserEntityFactoryService.$inject = [];

  function advertiserEntityFactoryService() {
    var self = this;
    self.createAdvertiser = function (data) {
      return new Advertiser(data);
    };

    function Advertiser(data){
      this.id = data ? data.id : undefined;
      this.name = data ? data.name : "";
      this.description = data ? data.description : "";
      this.link = data ? data.link : null;
      this.createdAt = data ? data.createdAt : undefined;
      this.updatedAt = data ? data.updatedAt : undefined;
    }
  }
})();

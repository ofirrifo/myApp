/**
 * Created by ofir on 12/14/2015.
 */
(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.advertiserEntityFactoryService
   * @description
   * This service contain the advertiser constructors in order to crete new advertiser instance
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

    self.createDtoAdvertiser = function (data) {
      return new DtoAdvertiser(data);
    };

    function Advertiser(data) {
      this.id = data ? data.id : undefined;
      this.name = data ? data.name : "";
      this.description = data ? data.description : "";
      this.link = data ? data.link : null;
      this.createdAt = data ? data.createdAt : undefined;
      this.updatedAt = data ? data.updatedAt : undefined;
    }

    function DtoAdvertiser(data) {
      this.id = data ? data.id : undefined;
      this.name = data ? data.name : "";
    }
  }

})();

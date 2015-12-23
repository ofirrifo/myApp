/**
 * Created by ofir on 12/13/2015.
 */
(function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name app.advertiserRestService
   * @description
   * This service help us with the CRUD action for advertiser
   */
  angular.module('advertiserApp')
    .service('advertiserRestService', advertiserRestService);

  advertiserRestService.$inject = ['$http', '$q', 'alertService'];

  function advertiserRestService($http, $q, alertService) {
    var self = this,
      baseUrl = 'http://localhost:3000/api/';


    self.getAdvertisers = function () {
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: baseUrl + 'advertisers'
      }).then(function successCallback(advertisers) {
        deferred.resolve(advertisers.data);
      }, function errorCallback(error) {
        alertService.addError({
          title: 'Fail to get advertisers',
          body: error.data
        });
        deferred.reject();
      });

      return deferred.promise;
    };

    self.getAdvertiserById = function (advertiserId) {
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: baseUrl + 'advertiser/' + advertiserId
      }).then(function successCallback(advertiser) {
        deferred.resolve(advertiser.data);
      }, function errorCallback(error) {
        alertService.addError({
          title: 'Fail to get advertiser',
          body: error.data
        });
        deferred.reject();
      });

      return deferred.promise;
    };

    self.saveAdvertiser = function (advertiser, isEditMode) {
      var deferred = $q.defer();
      var method = isEditMode ? "PUT" : "POST";
      var url = baseUrl + 'advertiser';
      if (method === "PUT") {
        url += '/' + advertiser.id;
      }

      $http({
        method: method,
        url: url,
        headers: {
          'Accept': 'application/json;odata=verbose',
          'content-type': 'application/json;odata=verbose'
        },

        data: advertiser
      }).then(function successCallback(advertiser) {
        alertService.addSuccess({
          title: 'Advertiser saved successfully'
        });
        deferred.resolve(advertiser.data);
      }, function errorCallback(error) {
        alertService.addError({
          title: 'Fail to save advertisers',
          body: error.data
        });
        deferred.reject();
      });

      return deferred.promise;
    };
  }

})(angular);

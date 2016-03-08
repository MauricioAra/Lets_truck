(function() {
  'use strict';
angular
  .module('letsTruckClient')
  .service('truckService', truckService);
  function truckService($http){
    //
    var create = function (ptruck) {
       return $http.post('http://localhost:3000/api/truck',ptruck);
     }
     var getMyTrucks = function (pidUser) {
        return $http.get('http://localhost:3000/api/myTruck/'+pidUser+'');
      }
     //
     var public_api = {
       create : create,
       getMyTrucks : getMyTrucks
     };
     return public_api;
  }
})();

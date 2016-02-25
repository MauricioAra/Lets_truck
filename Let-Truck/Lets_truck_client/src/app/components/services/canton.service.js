(function() {
  'use strict';
angular
  .module('letsTruckClient')
  .service('cantonService', cantonService);
  function cantonService($http){
    //
    var getAll = function () {
       return $http.get('http://localhost:3000/api/canton');
     }
     //
     var public_api = {
       getAll : getAll
     };
     return public_api;
  }
})();

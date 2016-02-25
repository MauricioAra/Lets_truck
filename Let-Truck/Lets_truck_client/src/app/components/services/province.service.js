(function() {
  'use strict';
angular
  .module('letsTruckClient')
  .service('provinceService', provinceService);
  function provinceService($http){
    //
    var getAll = function () {
       return $http.get('http://localhost:3000/api/province');
     }
     //
     var public_api = {
       getAll : getAll
     };
     return public_api;
  }
})();

(function() {
  'use strict';
angular
  .module('letsTruckClient')
  .service('authService',authService);
  function authService($http){
    //
    var checkout = function (psesion) {
       return $http.post('http://localhost:3000/api/authenticate',psesion);
     }
     //
     var public_api = {
       checkout : checkout
     };
     return public_api;
  }
})();

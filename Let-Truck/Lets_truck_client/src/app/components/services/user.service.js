(function() {
  'use strict';
angular
  .module('letsTruckClient')
  .service('userService', userService);
  function userService($http){
    //
    var create = function (puser) {
       return $http.post('http://localhost:3000/api/user',puser);
     }
     //
     var public_api = {
       create : create
     };
     return public_api;
  }
})();

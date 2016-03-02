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
     var getOneUser = function (pidUser) {
        return $http.get('http://localhost:3000/api/oneUser/'+pidUser+'');
      }
     //
     var public_api = {
       create : create,
       getOneUser : getOneUser
     };
     return public_api;
  }
})();

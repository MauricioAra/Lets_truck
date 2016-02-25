(function() {
  'use strict';
angular
  .module('letsTruckClient')
  .service('distritService', distritService);
  function distritService($http){
    var getAll = function(){
      return $http.get('http://localhost:3000/api/distrit');
    }
    //
    var public_api = {
      getAll : getAll
    };
    return public_api;
  }
})();

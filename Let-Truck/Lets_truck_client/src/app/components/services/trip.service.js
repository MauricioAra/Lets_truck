angular
  .module('letsTruckClient')
  .service('tripService',tripService);
  function tripService($http){
    var addTrip = function(ptrip){
      return $http.post('http://localhost:3000/api/trip',ptrip);
    }
    var myTrips = function(pmyId){
      return $http.get('http://localhost:3000/api/trip/'+pmyId+'');
    }
    var getById = function(pidTrip){
      return $http.get('http://localhost:3000/api/tripOne/'+pidTrip+'');
    }
    var getOferts = function(pidTrip){
      return $http.get('http://localhost:3000/api/ofertsTrip/'+pidTrip+'');
    }
    var api = {
      addTrip : addTrip,
      myTrips : myTrips,
      getById : getById,
      getOferts : getOferts
    }
    return api;
  }

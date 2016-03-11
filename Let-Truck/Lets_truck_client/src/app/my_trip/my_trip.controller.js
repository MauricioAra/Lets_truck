angular
  .module('letsTruckClient')
  .controller('myTripController', myTripController);
  function myTripController(tripService){
    var vmTrip = this;
    vmTrip.trip = "MY TRIPS"
    var myId = localStorage.getItem('idUser');
    var token = localStorage.getItem('token');
    function init(){
      tripService.myTrips(myId)
        .success(function(data){
         vmTrip.myTrips = data;
        })
        .error(function(err){
          console.log(err);
        })
    }
    init();
  }

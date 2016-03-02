angular
  .module('letsTruckClient')
  .controller('myTripController', myTripController);
  function myTripController(tripService){
    var vmTrip = this;
    vmTrip.trip = "MY TRIPS"
    var myId = localStorage.getItem('idUser');
    function init(){
      tripService.myTrips(myId)
        .success(function(data){
         vmTrip.myTrips = data;
        })
        .error(function(err){
          alert('error');
        })
    }
    init();
  }

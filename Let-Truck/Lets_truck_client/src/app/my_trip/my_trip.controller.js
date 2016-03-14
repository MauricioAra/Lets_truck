angular
  .module('letsTruckClient')
  .controller('myTripController', myTripController);
  function myTripController(tripService,$state){
    var vmTrip = this;
    vmTrip.trip = "MY TRIPS"
    var myId = localStorage.getItem('idUser');
    var token = localStorage.getItem('token');
    function init(){
      //Security
      if(localStorage.getItem("idUser") == false){
        $state.go('home');
      }
      //Get my trips
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

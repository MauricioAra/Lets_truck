angular
  .module('letsTruckClient')
  .controller('dashDriverController',dashDriverController);
  function dashDriverController(tripService,userService,$rootScope){
    // local variables
    var vmDash = this;
    var idUser = localStorage.getItem('idUser');
    var localTrips = [];
    //
    socket = io.connect('localhost:3000');
      socket.on('new_trip', function (data) {
        localTrips.push(data.trip);
        showTrips();
        $rootScope.$apply();
      });
    function init(){
      userService.getOneUser(idUser)
      .success(function(data){
        vmDash.user = data[0];
      })
      .error(function(e){
        console.log(e);
      });
      tripService.trips()
        .success(function(data){
          localTrips = data;
          showTrips();
        })
        .error(function(e){

        });
    }
    init();
    function showTrips(){
      vmDash.trips = localTrips;
    }

  }

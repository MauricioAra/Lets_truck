angular
  .module('letsTruckClient')
  .controller('dashDriverController',dashDriverController);
  function dashDriverController(tripService){
    // local variables
    var vmDash = this;
    function init(){
      tripService.trips()
        .then(function(data){
          console.log();
          vmDash.trips = data.data;
        }).catch(function(e){

        });
    }
    init();

  }

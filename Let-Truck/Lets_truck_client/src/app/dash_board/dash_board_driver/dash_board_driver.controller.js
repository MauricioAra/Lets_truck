angular
  .module('letsTruckClient')
  .controller('dashDriverController',dashDriverController);
  function dashDriverController(tripService,userService){
    // local variables
    var vmDash = this;
    var idUser = localStorage.getItem('idUser');
    function init(){
      userService.getOneUser(idUser)
      .success(function(data){
        vmDash.user = data[0];
      })
      .error(function(e){
        console.log(e);
      });
      tripService.trips()
        .then(function(data){
          console.log();
          vmDash.trips = data.data;
        }).catch(function(e){

        });
    }
    init();

  }

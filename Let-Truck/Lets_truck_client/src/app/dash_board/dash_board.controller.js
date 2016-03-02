angular
  .module('letsTruckClient')
  .controller('dashController',dashController);

  function dashController($state){
    // local variables
    var vmDash = this;
    //Origin variables
    vmDash.createTrip = function(){
      $state.go('create-trip');
    }
  }

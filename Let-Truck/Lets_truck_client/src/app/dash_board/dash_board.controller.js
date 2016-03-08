angular
  .module('letsTruckClient')
  .controller('dashController',dashController);

  function dashController($state){
    // local variables
    var vmDash = this;
    //Origin variables
    vmDash.name = localStorage.getItem('userName');
    vmDash.lastName = localStorage.getItem('lastName');
    //
    function init(){
      if(localStorage.getItem('rol') == 'client'){
        $state.go('dash.client');
      }else{
        if(localStorage.getItem('rol') == 'driver'){
          $state.go('dash.driver');
        }
      }
    }
    init();
    //
    vmDash.createTrip = function(){
      $state.go('create-trip');
    }
  }

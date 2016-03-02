angular
  .module('letsTruckClient')
  .controller('tripProfileController',tripProfileController);
  function tripProfileController($state,$stateParams,tripService,userService){
    var vmTripProfile = this;
    var idTrip = $stateParams.idTrip;
    //Init function
    function init(){
      tripService.getById(idTrip)
        .success(function(data){
         vmTripProfile.trip = data[0];
        })
        .error(function(err){
          alert('error');
        })
      //Get one unser
      userService.getOneUser($stateParams.idUser)
        .success(function(data){
          vmTripProfile.user  = data[0];
        })
        .error(function(err){
        })
        //Trip service
      tripService.getOferts(idTrip)
        .success(function(data){
          vmTripProfile.offers = data;
        })
        .error(function(err){

        })
    }
    init();
    //back method
    vmTripProfile.back = function(){
      if(localStorage.getItem('rol') == 'client'){
        $state.go('my-trip');
      }else{
        $state.go('dash');
      }
    }
  }

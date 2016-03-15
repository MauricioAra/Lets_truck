angular
  .module('letsTruckClient')
  .controller('advancedController',advancedController);
  function advancedController($stateParams,userService,truckService,$rootScope){
    var vmAdvanced = this;
    var idDriver = $stateParams.idDriver;
    vmAdvanced.idUserTrip = $stateParams.idUserTrip;
    vmAdvanced.idTrip = $rootScope.idTrip;
    console.log(vmAdvanced.idUserTrip);
    console.log(vmAdvanced.idTrip);
    /**
     *
     */
    function  init(){
      userService.getOneUser(idDriver)
      .success(function(data){
        vmAdvanced.user = data[0];
      })
      .error(function(e){
        console.log(e);
      });

      truckService.getMyTrucks(idDriver)
      .success(function(data){
        vmAdvanced.trucks = data;
      })
      .error(function(e){
        console.log(e);
      });
    }
    init();
  }

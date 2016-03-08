angular
  .module('letsTruckClient')
  .controller('truckController',truckController);
  function truckController($state,truckService){
    var vmTruck = this;
    var idDriver = localStorage.getItem('idUser');
    //Init function
    function init(){
      truckService.getMyTrucks(idDriver)
      .then(function(data){
        vmTruck.trucks = data.data;
      }).catch(function(e){

      });
    }
    init();
  }

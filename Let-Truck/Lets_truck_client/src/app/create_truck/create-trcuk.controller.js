angular
  .module('letsTruckClient')
  .controller('createTruckController',createTruckController);
  function createTruckController($state,truckService){
    var vmCTruck = this;
    var lidDriver = localStorage.getItem('idUser');
    //Init function
    vmCTruck.create = function(){
      truck = {
        brand : vmCTruck.brand,
        model : vmCTruck.model,
        year : vmCTruck.year,
        licensePlate : vmCTruck.licensePlate,
        tonnage : vmCTruck.tonnage.toString(),
        ramp : vmCTruck.ramp,
        refrigerated : vmCTruck.refrigerated,
        extras : vmCTruck.extras,
        idDriver : lidDriver,
        state : "true"
      }
        truckService.create(truck)
        .then(function(data){
          swal(
            'Success',
            'Truck created!',
            'success'
          )
          $state.go('trucks');
        }).catch(function(e){

        });
    }


  }

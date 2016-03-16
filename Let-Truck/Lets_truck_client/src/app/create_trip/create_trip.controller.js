angular
  .module('letsTruckClient')
  .controller('tripController',tripController);

  function tripController(provinceService,cantonService,distritService,tripService,$state){
    // local variables
    var vmTrip = this;
    //Origin variables
    var cantonsLocalOrigin = [];
    var distritsLocalOrigin = [];
    //Destination variables
    var cantonsLocalDestination = [];
    var distritsLocalDestination = [];
    socket = io.connect('localhost:3000');
    function init(){
      //
      provinceService.getAll()
        .success(function(data){
          vmTrip.provincesOrigin = data;
          vmTrip.provincesDestination = data;
        })
        .error(function(err){
          alert('Todo mal');
        });
      //
      cantonService.getAll()
        .success(function(data){
          cantonsLocalOrigin = data;
          cantonsLocalDestination = data;
        })
        .error(function(err){
          alert('Todo mal');
        });
      //
      distritService.getAll()
        .success(function(data){
          distritsLocalOrigin = data;
          distritsLocalDestination = data;
        })
        .error(function(err){
          alert('Todo mal');
        });
    }
    init();
    vmTrip.chargeCantonsOrigin = function(pprovince){
      var cantonsMatch = [];
      for(var i = 0; i < cantonsLocalOrigin.length; i++){
        if(pprovince.idProvincia == cantonsLocalOrigin[i].Provincia_idProvincia){
           var canton = cantonsLocalOrigin[i];
          cantonsMatch.push(canton);
        }
      }
      vmTrip.cantonsOrigin = cantonsMatch;
    }
    //Charge cantons
    vmTrip.chargeDistritsOrigin = function(pcanton){
      var distritsMatch = [];
      for(var i = 0; i < distritsLocalOrigin.length; i++){
        if(pcanton.idCanton == distritsLocalOrigin[i].Canton_idCanton){
           var distrit = distritsLocalOrigin[i];
          distritsMatch.push(distrit);
        }
      }
      vmTrip.distritsOrigin = distritsMatch;
    }
    /*--------------------------DESTINATION-------------------------------------------------*/
    vmTrip.chargeCantonsDestination = function(pprovince){
      var cantonsMatch = [];
      for(var i = 0; i < cantonsLocalDestination.length; i++){
        if(pprovince.idProvincia == cantonsLocalDestination[i].Provincia_idProvincia){
           var canton = cantonsLocalDestination[i];
          cantonsMatch.push(canton);
        }
      }
      vmTrip.cantonsDestination = cantonsMatch;
    }
    //Charge cantons
    vmTrip.chargeDistritsDestination = function(pcanton){
      var distritsMatch = [];
      for(var i = 0; i < distritsLocalDestination.length; i++){
        if(pcanton.idCanton == distritsLocalDestination[i].Canton_idCanton){
           var distrit = distritsLocalDestination[i];
          distritsMatch.push(distrit);
        }
      }
      vmTrip.distritsDestination = distritsMatch;
    }
    vmTrip.destination = function(){
      destination = 'Costa Rica'+', '+vmTrip.destination.province+', '+vmTrip.destination.canton+', '+vmTrip.destination.distrit;
      alert(destination);
    }
    vmTrip.origin = function(){
      origin = 'Costa Rica'+', '+vmTrip.origin.province+', '+vmTrip.origin.canton+', '+vmTrip.origin.distrit;
      alert(origin);
    }
    /*---------------------------------------------Create trip------------------------------------------------------*/
    vmTrip.createTrip = function(){
      var date = new Date();
      destination = 'Costa Rica'+', '+vmTrip.destination.province+', '+vmTrip.destination.canton+', '+vmTrip.destination.distrit;
      origin = 'Costa Rica'+', '+vmTrip.origin.province+', '+vmTrip.origin.canton+', '+vmTrip.origin.distrit;
      var trip ={
        directionOriginMap : origin,
        exactDirectionOrigin : vmTrip.exactAddressOrigin,
        directionDestinationMap : destination,
        exactDirectionDestination : vmTrip.exactAddressDestination,
        description : vmTrip.description,
        comment : vmTrip.comment,
        dateTrip : date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2),
        state : "true",
        img : "../../assets/images/verde2.png",
        idUser : localStorage.getItem('idUser')
      }
      tripService.addTrip(trip)
        .success(function(data){
          swal('Success!',
               'Your Trip was created!',
               'success' )
          $state.go('my-trip');
          socket.emit('new_trip', data);
        })
        .error(function(){
          sweetAlert('Oops...',
                     'Your Trip was not created!',
                     'error');
        })
    }
  }

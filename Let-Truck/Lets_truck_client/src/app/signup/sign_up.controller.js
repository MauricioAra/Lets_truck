angular
  .module('letsTruckClient')
  .controller('signupController',signupController);
  function signupController(userService,provinceService,cantonService,distritService,$state){
    //Mask $scope and global variables
    var vmSignup = this;
    var cantonsLocal = [];
    var distritsLocal = [];
    //init method
    function init(){
      //
      cantonService.getAll()
        .success(function(data){
          cantonsLocal = data;
        })
        .error(function(err){
          alert('Todo mal');
        });
      //
      provinceService.getAll()
        .success(function(data){
          vmSignup.provinces = data;
        })
        .error(function(err){
          alert('Todo mal');
        });
      //
      distritService.getAll()
        .success(function(data){
          distritsLocal = data;
        })
        .error(function(err){
          alert('Todo mal');
        });
    }
    //Initialize the method
    init();
    //Create user method
    vmSignup.create = function(){
      userService.create(vmSignup.user)
      .success(function(data) {
        swal('Success!',
             'Welcome to Lets Truck, now please login!',
             'success')
        $state.go('home');
      })
      .error(function(err) {
        console.log(err);
        alert('todo mal' + err);
      });
    }
    //Charge cantons
    vmSignup.chargeCantons = function(pprovince){
      var cantonsMatch = [];
      for(var i = 0; i < cantonsLocal.length; i++){
        if(pprovince.idProvincia == cantonsLocal[i].Provincia_idProvincia){
           var canton = cantonsLocal[i];
          cantonsMatch.push(canton);
        }
      }
      vmSignup.cantons = cantonsMatch;
    }
    //Charge cantons
    vmSignup.chargeDistrits = function(pcanton){
      var distritsMatch = [];
      for(var i = 0; i < distritsLocal.length; i++){
        if(pcanton.idCanton == distritsLocal[i].Canton_idCanton){
           var distrit = distritsLocal[i];
          distritsMatch.push(distrit);
        }
      }
      vmSignup.distrits = distritsMatch;
    }
  }// End controller

angular
  .module('letsTruckClient')
  .controller('tripProfileController',tripProfileController);
  function tripProfileController($rootScope,$state,$stateParams,tripService,userService,$modal){
    var vmTripProfile = this;
    var idTrip = $stateParams.idTrip;
    var localOffers = [];
    $rootScope.idTrip = idTrip;
    //
    socket = io.connect('localhost:3000');
      socket.on('new_offer', function (data) {
        localOffers.push(data.offer);
        showOffers();
        $rootScope.$apply();
      });
    //Init function
    function init(){
      //Permissions
      vmTripProfile.mostrar = false;
      vmTripProfile.tenderVisible = false;
      vmTripProfile.messagge = false;
      if(localStorage.getItem('rol') == 'client'){
        vmTripProfile.mostrar = true;
      }
      if(localStorage.getItem('rol') == 'driver'){
        vmTripProfile.tenderVisible = true;
        vmTripProfile.messagge = true;
      }
      //Get by id
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
          localOffers = data;
          showOffers();
        })
        .error(function(err){

        })
    }
    init();
    //
    function showOffers(){
      vmTripProfile.offers = localOffers;
    }
    //back method
    vmTripProfile.back = function(){
      if(localStorage.getItem('rol') == 'client'){
        $state.go('my-trip');
      }else{
        $state.go('dash');
      }
    }
    /**
     *
     */
    vmTripProfile.open = function(){
      var addModalInstance = $modal.open({
        animation: true,
        templateUrl: '/myModalContent.html',
        controllerAs: 'modal',
        controller:modalController,
        size:'md'
      });
    }
  }
  /**
   *
   */
  function modalController ($rootScope,$modalInstance,$state,tripService,truckService){
    var modal = this;
    var idDriver = localStorage.getItem('idUser');
    function init(){
      truckService.getMyTrucks(idDriver)
      .then(function(data){
        modal.trucks = data;
      }).catch(function(e){

      });
    }
    init();
    modal.close = function(){
       $modalInstance.close('closed');
    }
    modal.create = function(){
      //Create object offer
      offer = {
        amount : modal.amount.toString(),
        description : modal.description,
        idTrip : $rootScope.idTrip,
        idDriver :localStorage.getItem('idUser')
            }
      //Create offer function
      tripService.create(offer)
        .success(function(data){
          swal(
            'Success!',
            'Sent offer',
            'success'
          );
          $modalInstance.close('closed');
          socket.emit('new_offer', data);
        })
        .error(function(err){

        })
    }
  }

angular
  .module('letsTruckClient')
  .directive('tripCards',tripCards);
  function tripCards(){
    function tripCardController(){
      var vmTripCard = this;

      vmTripCard.visible = false;
      if(localStorage.getItem('rol') == 'client'){
        vmTripCard.visible = true;
      }
      vmTripCard.trip = vmTripCard.trips;
    }
    return{
      restrict: 'E',
        templateUrl: 'app/components/directives/trips_directive/trip.directive.tpl.html',
        scope:{
          trips:'='
        },
        bindToController:true,
        controllerAs: 'vmTripCard',
        controller : tripCardController
    }
  }

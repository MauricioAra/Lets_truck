angular
  .module('letsTruckClient')
  .controller('dashClientController',dashClientController);
  function dashClientController(){
    // local variables
    var vmDash = this;
    vmDash.name = localStorage.getItem('userName');
  }

angular
  .module('letsTruckClient')
  .controller('dashClientController',dashClientController);
  function dashClientController(userService){
    // local variables
    var vmDash = this;
    var idUser = localStorage.getItem('idUser');
    function init(){
      userService.getOneUser(idUser)
      .success(function(data){
        vmDash.user = data[0];
      })
      .error(function(e){
        console.log(e);
      });
    }
    init();
  }

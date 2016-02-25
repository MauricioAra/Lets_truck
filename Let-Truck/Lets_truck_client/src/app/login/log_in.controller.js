angular
  .module('letsTruckClient')
  .controller('loginController',loginController);
  function loginController(authService,$state){
    var vmLogin = this;
    //
    vmLogin.go = function(){
      authService.checkout(vmLogin.auth)
      .success(function(data){
        if(!data){
          swal(
            'Error',
            'E-mail and password incorrects',
            'error'
          );
        }else if(data){
          swal(
            'Welcome!',
            'Successful entry!',
            'success'
          );
          $state.go('home');
        }

      })
      .error(function(err){
        alert('Malo');
      })
    }
  }

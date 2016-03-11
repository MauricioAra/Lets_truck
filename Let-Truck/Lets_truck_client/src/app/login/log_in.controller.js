angular
  .module('letsTruckClient')
  .controller('loginController',loginController);
  function loginController(authService,$state,$cookies){
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
          localStorage.setItem("idUser", data._id);
          localStorage.setItem("userName", data.name);
          localStorage.setItem("lastName", data.lastName);
          localStorage.setItem("rol", data.role);
          localStorage.setItem("logged",true);
          $cookies.put('tokencito', data.token);
          $state.go('dash');
        }
      })
      .error(function(err){
        swal(
          'Error',
          'E-mail and password incorrects',
          'error'
        );
      })
    }
  }

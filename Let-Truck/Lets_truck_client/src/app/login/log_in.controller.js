angular
  .module('letsTruckClient')
  .controller('loginController',loginController);
  function loginController(authService,$state,$cookies,md5,$rootScope){
    var vmLogin = this;
    //
    vmLogin.go = function(){
      var password  = md5.createHash(vmLogin.auth.password);
      vmLogin.auth.password = password;
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
          localStorage.setItem("token", data.token);
          console.log(localStorage.getItem("token"));
          //
          $rootScope.$broadcast('logged',{logged:true});
          //
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

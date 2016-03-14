(function() {
  'use strict';

  angular
    .module('letsTruckClient')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */

    function NavbarController($rootScope,moment,$state) {
      var vm = this;

      if(localStorage.getItem('idUser') == ''){
        vm.visible = false;
        vm.visibleLog = true;
        vm.visibleTrips = false;
        vm.visibleTrucks = false;
      }else{
        vm.visibleLog = false;
        vm.visible = true;
        if(localStorage.getItem('rol') == 'client'){
          vm.visibleTrips = true;
        }
        if(localStorage.getItem('rol') == 'driver'){
          vm.visibleTrucks = true;
        }
      }
      
      $rootScope.$on('logged', function(event, mass) {
        vm.visibleLog = false;
        vm.visible = true;
        if(localStorage.getItem('rol') == 'client'){
          vm.visibleTrips = true;
        }
        if(localStorage.getItem('rol') == 'driver'){
          vm.visibleTrucks = true;
        }
      });

      vm.signup = function(){
        $state.go('signup');
      }
      vm.login = function(){
        $state.go('login');
      }
      vm.logout = function(){
        localStorage.setItem("idUser",'');
        localStorage.setItem("userName",'');
        localStorage.setItem("logged", false);
        vm.visibleLog = true;
        vm.visible = false;
        vm.visibleTrips = false;
        vm.visibleTrucks = false;
        $state.go('login');
      }
    }
  }

})();

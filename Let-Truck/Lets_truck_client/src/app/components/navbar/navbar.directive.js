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
    function NavbarController(moment,$state) {
      var vm = this;
      vm.menu = vm.mainObject;

      vm.signup = function(){
        $state.go('signup');
      }
      vm.login = function(){
        $state.go('login');
      }
      vm.logout = function(){
        localStorage.setItem("idUser",'');
        localStorage.setItem("userName",'');
        localStorage.setItem("logged",'');
        $state.go('login');
      }
    }
  }

})();

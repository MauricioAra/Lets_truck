(function() {
  'use strict';

  angular
    .module('letsTruckClient')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vmMain'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

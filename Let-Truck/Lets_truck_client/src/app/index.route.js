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
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/signup/sign_up.view.html',
        controller: 'signupController',
        controllerAs: 'vmSignup'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/log_in.view.html',
        controller: 'loginController',
        controllerAs: 'vmLogin'
      });
    $urlRouterProvider.otherwise('/');
  }

})();

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
      })
      .state('dash', {
        url: '/dash',
        templateUrl: 'app/dash_board/dash_board.view.html',
        controller: 'dashController',
        controllerAs: 'vmDash'
      })
      .state('create-trip', {
        url: '/create-trip',
        templateUrl: 'app/create_trip/create_trip.view.html',
        controller: 'tripController',
        controllerAs: 'vmCTrip'
      })
      .state('my-trip', {
        url: '/my-trips',
        templateUrl: 'app/my_trip/my_trip.view.html',
        controller: 'myTripController',
        controllerAs: 'vmTrip'
      })
      .state('trip-profile', {
        url: '/trip-profile/:idTrip/:idUser',
        templateUrl: 'app/trip-profile/trip_profile.view.html',
        controller: 'tripProfileController',
        controllerAs: 'vmTripProfile'
      });
    $urlRouterProvider.otherwise('/');
  }

})();

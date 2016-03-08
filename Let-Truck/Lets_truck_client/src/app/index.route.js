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
      .state('dash.client', {
        url: '/dash/client',
        templateUrl: 'app/dash_board/dash_board_client/dash_board_client.view.html',
        controller: 'dashClientController',
        controllerAs: 'vmDashClient'
      })
      .state('dash.driver', {
        url: '/dash/driver',
        templateUrl: 'app/dash_board/dash_board_driver/dash_board_driver.view.html',
        controller: 'dashDriverController',
        controllerAs: 'vmDashDriver'
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
      })
      .state('trucks', {
        url: '/trucks',
        templateUrl: 'app/truck/truck.view.html',
        controller: 'truckController',
        controllerAs: 'vmTruck'
      })
      .state('create-truck', {
        url: '/create-truck',
        templateUrl: 'app/create_truck/create-truck.view.html',
        controller: 'createTruckController',
        controllerAs: 'vmCTruck'
      });
    $urlRouterProvider.otherwise('/');
  }

})();

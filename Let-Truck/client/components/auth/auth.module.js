'use strict';

angular.module('letTruckApp.auth', [
  'letTruckApp.constants',
  'letTruckApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

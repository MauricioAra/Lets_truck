(function() {
  'use strict';
  angular
    .module('letsTruckClient', [
                                'ngAnimate',
                                'ngCookies',
                                'ngTouch',
                                'ngSanitize',
                                'ngMessages',
                                'ngAria',
                                'ui.router',
                                'ui.bootstrap',
                                'toastr',
                                'ngMaterial'])
   .config(function($mdThemingProvider) {
      $mdThemingProvider.theme("custom").primaryColor("teal").accentColor("deep-orange");
     });
})();

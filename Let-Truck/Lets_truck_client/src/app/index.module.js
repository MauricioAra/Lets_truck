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
                                'ngMaterial',
                                'ngMap',
                                'ngCookies',
                                'angular-md5',
                                'cloudinary',
                                'ngFileUpload'])
   .config(function($mdThemingProvider) {
      $mdThemingProvider.theme("custom").primaryColor("teal").accentColor("deep-orange");
     });
})();

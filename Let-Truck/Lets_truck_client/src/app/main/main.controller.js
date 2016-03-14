(function() {
  'use strict';
  angular
    .module('letsTruckClient')
    .controller('MainController', MainController);
  /** @ngInject */
  function MainController($scope) {
      $scope.comentarios = [
        {nombre:'Mauricio Araica',comentario:'tene q eudiar',fecha:'2016-03-15'},
        {nombre:'Paula Segura',comentario:'tene q eudiar paula',fecha:'2016-04-12'}
      ]
  }
})();

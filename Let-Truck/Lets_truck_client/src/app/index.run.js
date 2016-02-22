(function() {
  'use strict';

  angular
    .module('letsTruckClient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

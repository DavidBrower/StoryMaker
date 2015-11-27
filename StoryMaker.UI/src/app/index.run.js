/* global angular */
(function() {
  'use strict';

  angular
    .module('storyMaker')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

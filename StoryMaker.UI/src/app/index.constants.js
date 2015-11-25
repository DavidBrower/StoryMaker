/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('storyMaker')
    .constant('toastr', toastr)
    .constant('moment', moment);

})();

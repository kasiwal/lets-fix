'use strict';

angular.module('mean.landing').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('landing example page', {
      url: '/landing/example',
      templateUrl: 'landing/views/index.html'
    });
  }
]);

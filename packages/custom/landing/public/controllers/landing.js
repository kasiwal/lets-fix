'use strict';

angular.module('mean.landing').controller('LandingController', ['$scope', 'Global', 'Landing',
  function($scope, Global, Landing) {
    $scope.global = Global;
    $scope.package = {
      name: 'landing'
    };
  }
]);

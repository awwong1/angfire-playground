'use strict';

/**
 * @ngdoc function
 * @name angfirePlaygroundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angfirePlaygroundApp
 */
angular.module('angfirePlaygroundApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

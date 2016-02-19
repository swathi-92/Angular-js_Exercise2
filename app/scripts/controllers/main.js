'use strict';
angular.module('angDirectivesApp')
.controller('myCntrl', function ($scope) {
     $scope.name = 'success';
     $scope.name1 = 'Failure';
     $scope.button1='btn-success';
     $scope.button2='btn-danger';
     $scope.fnSucessBtn  = function () {
    window.alert('success');
};
$scope.fnErrorBtn  = function () {
    window.alert('Failure');
};


  });
  
  

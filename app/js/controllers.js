'use strict';

/* Controllers */

var phonecatApp = angular.module('firstApp', []);

phonecatApp.controller('ListCtrl', function ($scope) {
  $scope.list = [
    {'name': 'First',
     'snippet': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {'name': 'Second',
     'snippet': 'Suspendisse fringilla porta aliquet.'},
    {'name': 'Third',
     'snippet': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'}
  ];
});
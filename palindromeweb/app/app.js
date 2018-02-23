'use strict';
angular.module('palindromeApp', ['ngRoute', 'palindromeApp.home', 'ngMaterial']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}]);


'use strict';


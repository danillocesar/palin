'use strict';
angular.module('palindromeApp.home', ['ngRoute'])
.controller('HomeCtrl', function($scope, $http) {
	$scope.palindromeTxt = "";
	$scope.palindromes = [];
	$scope.testPalindrome = function(){
			$http.get("http://localhost:3000/isPalindrome/"+$scope.palindromeTxt)
			.then(function(response) {
				console.log(response)
				$scope.palindromes.push({text: $scope.palindromeTxt, isPalindromeTxt: response.data.msg});
			},
			function(response) {
				console.log(response)
				$scope.palindromes.push({text: $scope.palindromeTxt, isPalindromeTxt: response.data.msg});
			});
	}
});
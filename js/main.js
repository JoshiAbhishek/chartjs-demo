// Create app
var myApp = angular.module('myApp', ['ui.router', 'firebase']);

//App Authentication Factory
myApp.factory("Auth", function ($firebaseAuth) {
	var ref = new Firebase('https://chartjsdashboard.firebaseio.com/');
	return $firebaseAuth(ref);
});

//App Config
myApp.config(function ($stateProvider) {
	$stateProvider
		.state('main', {
			url: '',
			templateUrl: 'templates/main.html',
			controller: 'MainController'
		})

		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'AboutController'
		})

		.state('data', {
			url: '/data',
			templateUrl: 'templates/data.html',
			controller: 'DataController'
		})
});

//Main Controller
myApp.controller('MainController', function ($scope, $stateParams, $http, $state, Auth, $firebaseArray, $firebaseObject) {
	
});

//About Controller
myApp.controller('AboutController', function ($scope, $stateParams, $http, $state, Auth, $firebaseArray, $firebaseObject) {
	
});

//Data Controller
myApp.controller('DataController', function ($scope, $stateParams, $http, $state, Auth, $firebaseArray, $firebaseObject) {
	
});
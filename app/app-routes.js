'use strict';

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  	$routeProvider.
  		when('/', {
  			templateUrl: 'pages/home/home.html',
  			controller: 'HomeCtrl'
  		}).
  		when('/services', {
    		templateUrl: 'pages/services/services.html',
    		controller: 'ServicesCtrl'
  		}).
  		when('/contact', {
    		templateUrl: 'pages/contact/contact.html',
    		controller: 'ContactCtrl'
  		}).
  		otherwise({
  			redirectTo: '/'
  		});

  	// Remove # from URL
    $locationProvider.html5Mode(true);
}]);
